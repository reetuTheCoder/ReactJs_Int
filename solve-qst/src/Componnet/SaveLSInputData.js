import { useEffect, useState } from "react";

const SaveLSInputData = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("inputValue");
    if (saved) {
      setValue(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("inputValue", value);
  }, [value]);
  return (
    <div>
      <h1>Local Storage Input</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  );
};

export default SaveLSInputData;
