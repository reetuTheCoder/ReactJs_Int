import React from 'react'

const Child4 = ({list}) => {
    console.log("user list call");
    
  return (
    <div>
       <h1>User List</h1>
        <ul>
            {list.map((user, idx)=> (
                <li key={idx}>{user}</li>
            ))}
        </ul>
    </div>
  )
}

export default Child4