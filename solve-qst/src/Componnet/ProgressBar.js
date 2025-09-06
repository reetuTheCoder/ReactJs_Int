import React, { useState } from "react";

export const ProgressBar = ({percent}) => {
  return (
    <div
      style={{
        width: "100%",
        background: "gray",
        height: "10px",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${percent}%`,
          background: "green",
          height: "100%",
          borderRadius: "10px",
          transition: "width 0.3s ease-in-out",
        }}
      ></div>
    </div>
  );
};

const MainProgressBar = () => {
  const [progressVal, setProgressval] = useState(40);

  const handlePlus = () =>{
    setProgressval((p) => Math.min(p + 10, 100));
  }
    const handleLess = () =>{
    setProgressval((p) => Math.min(p - 10, 0));
  }
  return (
    <div
      style={{
        width: "400px",
        margin: "20px auto"
      }}
    >
      <ProgressBar percent={progressVal} />

      <br />
      <br />
       <button onClick={handleLess}>
        -
      </button>
      <button onClick={handlePlus}>
        +
      </button>
    </div>
  );
};

export default MainProgressBar;
