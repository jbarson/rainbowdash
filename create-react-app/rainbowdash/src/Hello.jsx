import React from 'react'
import Greet from './Greet'

function Hello(props) {
  console.log(props.name)
  const variable = "hello"
  return (
    <div><Greet /> {props.name}</div>
  )
}

export default Hello