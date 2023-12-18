import React from 'react'
import { Link } from 'react-router-dom'

export const LightButton = (props) => {
  return (
    <>
        <button className='text-dark bg-secondary hover:bg-primary hover:text-dark transition-all ease-in-out duration-300 border-2 border-solid border-gray-300 hover:border-primary'>{props.name}</button>
    </>
  )
}

export const DarkButton = (props) => {
  return (
    <>
        <button className='bg-dark text-secondary hover:bg-primary hover:text-dark transition-all ease-in-out duration-300'>{props.name}</button>
    </>
  )
}

export default {LightButton, DarkButton}