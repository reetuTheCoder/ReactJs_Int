import React, { useState } from "react";

const ContactForms = () => {
  const [inputData, setInputData] = useState({
    name: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;

    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit data", inputData);
  };

  return (
    <div>
      <h1>ContactForms</h1>
      <form onSubmit={handleSubmit}>
        <div>
            <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={inputData.name}
            onChange={handleInputs}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForms;
