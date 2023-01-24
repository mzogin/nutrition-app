import React from 'react'
import SearchList from '../components/SearchList'
import { SearchForm } from '../components/SearchForm'

export const SearchFood = () => {
  return (
    <section className='search'>
      {/* <form class='form'>
        <input type='text' class='search' placeholder='add food' />
      </form> */}
      <SearchForm />
      <SearchList />
    </section>
  )
}
