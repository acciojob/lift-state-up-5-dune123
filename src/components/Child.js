import React from 'react'

const Child = (props) => {
  return (
    <div>
    <h2>{props.name}</h2>
    <h2>{props.password}</h2>
    </div>
  )
}

export default Child