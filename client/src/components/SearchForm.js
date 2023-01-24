import React from 'react'
import { useGlobalContext } from '../context/context'

export const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = React.useRef('')

  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  function searchFood() {
    setSearchTerm(searchValue.current.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <form className='form' onSubmit={handleSubmit}>
      <input
        type='text'
        name='name'
        id='name'
        className='search'
        placeholder='add food'
        ref={searchValue}
        onChange={searchFood}
      />
    </form>
  )
}
