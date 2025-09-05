import React from 'react'

const Child3 = ({data}) => {
     console.log("is Child 3 called");
  return (
    <div>
        <h1>Child3 data</h1>
        <p>{data.value}</p>
    </div>
  )
}

export default Child3