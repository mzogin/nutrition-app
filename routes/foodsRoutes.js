import express from 'express'
const router = express.Router()

import {
  createFood,
  deleteFood,
  getAllFoods,
  updateFoods,
  showStats,
} from '../controllers/foodsController.js'

import testUser from '../middleware/testUser.js'

router.route('/').post(testUser, createFood).get(getAllFoods)
// remember about :id
router.route('/stats').get(showStats)
router.route('/:id').delete(testUser, deleteFood).patch(testUser, updateFood)

export default router
