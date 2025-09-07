import React from "react";
import useTheme from "../useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "dark" : "light"} mode
      </button>
    </div>
  );
};

export default ThemeToggle;
