import SearchResult from './SearchResult'
import Loading from './Loading'
// import React from 'react'
import { useReducer } from 'react'
import { useGlobalContext } from '../context/context'
import { SelectAmount } from './SelectAmount'
import { reducer } from '../context/reducer'

const defaultState = {
  item: {},
  // item: [],
  isModalOpen: false,
  // modalContent: '',
}

export default function SearchList() {
  const { foods, loading } = useGlobalContext()
  // const [showModal, setShowModal] = useState(false)

  const [state, dispatch] = useReducer(reducer, defaultState)

  if (loading) {
    return <Loading />
  }
  if (foods.length < 1) {
    return <h3 className='error-message'>no results found</h3>
  }
  const handleAddFood = (item) => {
    // console.log(item)
    dispatch({ type: 'ADD_ITEM', payload: item })
  }
  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }
  return (
    <section className='results'>
      {state.isModalOpen && (
        <SelectAmount
          id={state.item.id}
          name={state.item.name}
          measures={state.item.measures}
          closeModal={closeModal}
          // closeModal={closeModal}
          // modalContent={state.modalContent}
        />
      )}
      {foods.map((item) => {
        // on click show popup here?
        return (
          <SearchResult
            handleClick={handleAddFood}
            key={item.id}
            item={item}
            {...item}
          />
        )
      })}
    </section>
    // <section className='section'>
    //   <h2 className='section-title'>foods</h2>
    //   <div className='foods-center'>
    //     {foods.map((item) => {
    //       return <Cocktail key={item.id} {...item} />
    //     })}
    //   </div>
    // </section>
  )
}
