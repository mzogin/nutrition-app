import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url =
  'https://api.edamam.com/api/food-database/v2/parser?app_id=b2816b51&app_key=a420d2d8976d76cea22e5ac2888cedb5&nutrition-type=logging&health=vegan&ingr='

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('a')
  const [foods, setFoods] = useState([])

  const fetchFoods = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json()
      // console.log(data)
      const { hints } = data
      if (hints) {
        const newFoods = hints.map((item) => {
          const { measures } = item
          const { foodId, label } = item.food
          // console.log(foodId)
          return {
            id: foodId,
            name: label,
            measures,
          }
        })
        setFoods(newFoods)
      } else {
        setFoods([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }, [searchTerm])
  useEffect(() => {
    fetchFoods()
  }, [searchTerm, fetchFoods])
  return (
    <AppContext.Provider value={{ loading, foods, searchTerm, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }
