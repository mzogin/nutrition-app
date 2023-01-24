import Food from '../models/Food'
import { StatusCodes } from 'http-status-codes'
import {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
} from '../errors/index.js'
import checkPermissions from '../utils/checkPermissions.js'
import mongoose from 'mongoose'
import moment from 'moment'
const createFood = async (req, res) => {
  // const { position, company } = req.body
  const { name, foodID } = req.body

  // if (!position || !company) {
  //   throw new BadRequestError('Please provide all values')
  // }
  req.body.createdBy = req.user.userId
  const food = await Food.create(req.body)
  res.status(StatusCodes.CREATED).json({ food })
}
const getAllFoods = async (req, res) => {
  const { status, jobType, sort, search } = req.query

  const queryObject = {
    createdBy: req.user.userId,
  }
  // add stuff based on condition

  if (status && status !== 'all') {
    queryObject.status = status
  }
  if (jobType && jobType !== 'all') {
    queryObject.jobType = jobType
  }
  if (search) {
    queryObject.position = { $regex: search, $options: 'i' }
  }
  // NO AWAIT

  let result = Food.find(queryObject)

  // chain sort conditions

  if (sort === 'latest') {
    result = result.sort('-createdAt')
  }
  if (sort === 'oldest') {
    result = result.sort('createdAt')
  }
  if (sort === 'a-z') {
    result = result.sort('position')
  }
  if (sort === 'z-a') {
    result = result.sort('-position')
  }

  //

  // setup pagination
  const page = Number(req.query.page) || 1
  const limit = Number(req.query.limit) || 10
  const skip = (page - 1) * limit

  result = result.skip(skip).limit(limit)

  const foods = await result

  const totalFoods = await Food.countDocuments(queryObject)
  const numOfPages = Math.ceil(totalFoods / limit)

  res.status(StatusCodes.OK).json({ foods, totalFoods, numOfPages })
}

// const updateFood = async (req, res) => {
//   const { id: jobId } = req.params
//   const { company, position } = req.body

//   if (!position || !company) {
//     throw new BadRequestError('Please provide all values')
//   }
//   const job = await Job.findOne({ _id: jobId })

//   if (!job) {
//     throw new NotFoundError(`No job with id :${jobId}`)
//   }
//   // check permissions

//   checkPermissions(req.user, job.createdBy)

//   const updatedJob = await Job.findOneAndUpdate({ _id: jobId }, req.body, {
//     new: true,
//     runValidators: true,
//   })

//   res.status(StatusCodes.OK).json({ updatedJob })
// }
const deleteFood = async (req, res) => {
  const { id: foodId } = req.params

  const food = await Food.findOne({ _id: foodId })

  if (!food) {
    throw new NotFoundError(`No job with id :${jobId}`)
  }

  checkPermissions(req.user, food.createdBy)

  await food.remove()

  res.status(StatusCodes.OK).json({ msg: 'Success! Food removed' })
}

const showStats = async (req, res) => {
  let stats = await Job.aggregate([
    { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: '$status', count: { $sum: 1 } } },
  ])
  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr
    acc[title] = count
    return acc
  }, {})

  const defaultStats = {
    pending: stats.pending || 0,
    interview: stats.interview || 0,
    declined: stats.declined || 0,
  }

  let monthlyApplications = await Job.aggregate([
    { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
    {
      $group: {
        _id: { year: { $year: '$createdAt' }, month: { $month: '$createdAt' } },
        count: { $sum: 1 },
      },
    },
    { $sort: { '_id.year': -1, '_id.month': -1 } },
    { $limit: 6 },
  ])
  monthlyApplications = monthlyApplications
    .map((item) => {
      const {
        _id: { year, month },
        count,
      } = item
      const date = moment()
        .month(month - 1)
        .year(year)
        .format('MMM Y')
      return { date, count }
    })
    .reverse()

  res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications })
}

export { createFood, deleteFood, getAllFoods, updateFood, showStats }
