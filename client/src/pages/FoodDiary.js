import React from 'react'

export const FoodDiary = () => {
  return (
    <section className='foods'>
      <div className='food'></div>
      <div className='food'></div>
      <div className='food'></div>
      <div className='food'>
        some food
        <span>
          <i className='fa-solid fa-chevron-down'></i>
          <i className='fa-solid fa-pen'></i>
          <i className='fa-solid fa-trash'></i>
        </span>
      </div>
      <div className='food'>
        some food
        <span>
          <i className='fa-solid fa-trash'></i>
        </span>
      </div>
      <div className='food'>
        some food
        <span>
          <i className='fa-solid fa-trash'></i>
        </span>
      </div>
    </section>
  )
}
