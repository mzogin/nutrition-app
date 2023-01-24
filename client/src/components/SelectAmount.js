import React from 'react'
import { useRef, useEffect } from 'react'

// custom hook
function useDetectClickOutside(ref, close) {
  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        // close popup
        close()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, close])
  // !! ADDED CLOSE
}

export const SelectAmount = ({ id, name, measures, closeModal }) => {
  const wrapperRef = useRef(null)
  // close on click outside
  useDetectClickOutside(wrapperRef, closeModal)
  return (
    <div ref={wrapperRef} className='select-amount'>
      <div className='food-description'>
        <h4>{name}</h4>
      </div>
      <div className='food-details'>
        <div className='serving'>
          <label htmlFor='serving'>measure:</label>
          <select name='serving' id='serving'>
            {measures.map((measure) => {
              return (
                <option key={measure.uri} value={measure.label}>
                  {measure.label}
                </option>
              )
            })}
          </select>
        </div>
        <div className='quantity'>
          <label htmlFor='quantity'>quantity:</label>
          <input type='number' id='quantity' name='quantity' min='1' />
        </div>
        <div className='btns-container'>
          <button className='btn'>add</button>
        </div>
      </div>
    </div>
  )
}
