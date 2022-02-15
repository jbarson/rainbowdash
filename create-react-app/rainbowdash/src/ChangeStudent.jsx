import React from 'react'

function ChangeStudent(props) {
  return (
    <>
      <button type="button" name='student' onClick={() => props.setStudent("Todd")} >change to Todd</button>
      <button onClick={props.sayBoo}>eek!!!</button>
    </>
  )
}

export default ChangeStudent