import React, { useState } from 'react'

const HoverCount = () => {
   const [hoverCount, setHoverCount] = useState(0);

   const handldHover = () => {
    setHoverCount((prev) => prev +1)
   }
  return (
    <div>
        <h1>Hover Count: {hoverCount} </h1>
        <button onMouseEnter={handldHover}>Count Hover</button>
    </div>
  )
}

export default HoverCount;