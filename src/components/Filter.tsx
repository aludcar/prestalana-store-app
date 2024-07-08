import React from 'react'
import InputField from './InputField'
import { useDispatch } from 'react-redux'
import { filterProducts } from '../actions/productsActions'

const Filter: React.FC = () => {
  const dispatch = useDispatch();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(filterProducts(e.currentTarget.value as string))
  }
  return (
    <section>
      <InputField labelText="Filter" inputName="term" inputType="search" isRequired={true} handlerOnChange={handleOnChange} />
    </section>
  )
}

export default Filter