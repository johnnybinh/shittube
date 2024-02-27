import React from 'react'
export default function HelloWorld(props) {
  return (
    <div>
      <h1 className="text-3xl font-bold">hello {props.name} </h1>
      <h1>your age is {props.age}</h1>
    </div>
  )
}
