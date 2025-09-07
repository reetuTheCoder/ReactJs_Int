import React, { useState } from "react";

const InputMsgEnter = () => {
  const [inputVal, setInputVal] = useState("");
  const [storeMsg, setStoreMsg] = useState([]);

  const handleStoreMsg = () => {
    if (inputVal.trim()) {
      setStoreMsg((pre) => [...pre, inputVal]);
      setInputVal("")
    }
  };

  const handlePressKey = (e) => {
    if (e.key === "Enter" || e.key === "Shift") {
      handleStoreMsg();
    }
  };
  return (
    <div>
      <h1>Store Input Msg on press of Enter</h1>
      {storeMsg.map((msg, index) => (
        <li key={index}>{msg}</li>
      ))}
      <input
        type="text"
        placeholder="Type your mesg..."
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        onKeyDown={handlePressKey}
      />
    </div>
  );
};

export default InputMsgEnter;
