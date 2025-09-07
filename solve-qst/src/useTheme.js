import React, { useEffect, useState } from "react";

// const THEME_KEY = "app-theme";

// const getInitialTheme = () => {
//   if (typeof window !== "undefined") {
//      return localStorage.getItem(THEME_KEY) || "light";
//     return "light";
//   }
//   return "light";
// };

const useTheme = () => {
//   const [theme, setTheme] = useState(getInitialTheme);
  const [theme, setTheme] = useState("light");


//   useEffect(() => {
//     localStorage.setItem(THEME_KEY, theme);
//     document.documentElement.setAttribute("data-theme", theme);
//   }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
};

export default useTheme;
