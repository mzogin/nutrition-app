import React from 'react'
// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { SelectAmount } from './SelectAmount'
export default function SearchResult({ handleClick, item, name }) {
  // export default function SearchResult(id, name, measures) {
  // onClick = { handleAddFood }
  // const [showModal, setShowModal] = useState(false)
  // const handleAddFood = () => {
  //   setShowModal(true)
  // }
  return (
    <>
      {/* {showModal && (
        <SelectAmount
          id={id}
          name={name}
          measures={measures}
          // closeModal={closeModal}
          // modalContent={state.modalContent}
        />
      )} */}
      {/* onClick={handleAddFood} */}
      <div onClick={() => handleClick(item)} className='result'>
        <span>{name.length < 28 ? name : name.slice(0, 28) + '...'}</span>
        <span className='result-dropdown'>
          {/* {measures[0].label} */}
          {/* {measures[0].weight} */}
          <i className='fa-solid fa-chevron-down'></i>
        </span>
      </div>
    </>
  )
}
