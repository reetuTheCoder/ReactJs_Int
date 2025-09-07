import { useState } from "react";

const BuutonActionOnClick = () => {
  const [inputVal, setInputVal] = useState("");

  const handleSubmit = () => {
    // it will work when you start typing
    // if (inputVal.trim()) {
    //     alert(`typed msg: ${inputVal}`)
    // }

    // it will work when you will type atlest 2 character then button will active
    if (inputVal.trim().length > 2) {
      alert(`typed msg: ${inputVal}`);
    }
  };
  return (
    <div>
      <h1>Input Box should be active after typing start</h1>
      <input
        type="text"
        placeholder="Type your mesg..."
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button
        style={{
          background: "blue",
          outline: "none",
          border: "none",
          padding: "10px 20px",
          marginLeft: "10px",
          cursor: "pointer",
        }}
        // disabled={!inputVal.trim()} // it will work when you start typing
        
    // it will work when you will type atlest 2 character then button will active
        disabled={inputVal.trim().length <= 2}  
        onClick={handleSubmit}
      >
        Click Me
      </button>
    </div>
  );
};

export default BuutonActionOnClick;
