import React from 'react'
import InputField from './InputField'
import { useDispatch } from 'react-redux'
import { filterProducts } from '../actions/productsActions'

import Wrapper from '../assets/styled-wrappers/FilterWrapper'

const Filter: React.FC = () => {
  const dispatch = useDispatch();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(filterProducts(e.currentTarget.value as string))
  }
  return (
    <Wrapper>
      <InputField labelText="Filter :" inputName="term" inputType="search" isRequired={true} handlerOnChange={handleOnChange} />
    </Wrapper>
  )
}

export default Filter