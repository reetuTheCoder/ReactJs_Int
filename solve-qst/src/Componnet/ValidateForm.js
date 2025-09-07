import React, { useState } from "react";

const ValidateForm = () => {
  const [inputVal, setInputVal] = useState({
    name: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputVal({
      ...inputVal,
      [name]: value,
    });
  };

  const validation = () => {
    const errors = {};
    if (!inputVal.name.trim()) {
      errors.name = "Name is Required";
    }
    if (!inputVal.email.trim()) {
      errors.email = "Email is Required";
    } else if (!/\S+@\S+\.\S+/.test(inputVal.email)) {
      errors.email = "Email is invalid";
    }
    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validation();
    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submited");
    } else {
      setErrors(validationErrors);
    }
  };
  return (
    <div>
      <h1>Validate Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={inputVal.name}
            onChange={handleChange}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>
        <div>
          <label>Email: </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            value={inputVal.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ValidateForm;
