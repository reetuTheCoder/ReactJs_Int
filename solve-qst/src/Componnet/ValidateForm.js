import React, { useState } from "react";


const ValidateForm = () => {

    const initialFormState = {
    name: "",
    email: "",
    phone: "",
    password: "",
  };

  const [inputVal, setInputVal] = useState(initialFormState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputVal({
      ...inputVal,
      [name]: value,
    });
  };

  const validationRules = {
    name: {
      required: true,
      message: "Name is required",
    },
    email: {
      required: true,
      pattern: /\S+@\S+\.\S+/,
      message: "Enter a valid email",
    },
    phone: {
      required: true,
      pattern: /^[0-9]{10}$/,
      message: "Enter a valid 10-digit phone number",
    },
    password: {
      required: true,
      minLength: 10,
      message: "Password must be at least 6 characters",
    },
  };
  const validation = () => {
    const errors = {};

    for (const field in validationRules) {
      const rule = validationRules[field];
      const value = inputVal[field].trim();

      if (rule.required && !value) {
        errors[field] = rule.message;
      } else if (rule.pattern && !rule.pattern.test(value)) {
        errors[field] = rule.message;
      } else if (rule.minLength && value.length < rule.minLength) {
        errors[field] = rule.message;
      }
    }

    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validation();
    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submited");
      setErrors({});
      setInputVal(initialFormState); 
    } else {
      setErrors(validationErrors);
    }
  };
  return (
    <div>
      <h1>Validate Form</h1>
      <form onSubmit={handleSubmit}>
        {Object.keys(inputVal).map((field) => (
          <div key={field}>
            <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
            <input
              type={field === "email" ? "email" : "text"}
              placeholder={`Enter ${field}`}
              name={field}
              value={inputVal[field]}
              onChange={handleChange}
            />
            {errors[field] && <p style={{ color: "red" }}>{errors[field]}</p>}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ValidateForm;
