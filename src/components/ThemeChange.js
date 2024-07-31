import React, { useState } from 'react';
import './ThemeChange.css';
import { BsBrightnessHigh ,BsFillBrightnessHighFill} from "react-icons/bs";


const ThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle('dark-theme', !isDarkTheme);
  };

  return (
   <span className="theme-toggle">
    
     <button onClick={toggleTheme} className="toggle-button">
        {isDarkTheme? <BsBrightnessHigh  size={20} /> : < BsFillBrightnessHighFill  size={20} />}
     </button>
      

   </span>
  );
};

export default ThemeToggle;
