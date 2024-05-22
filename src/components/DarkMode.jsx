import React, { useState, useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
import Dashboard from "./Dashboard";

function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  // this is the code in which when user select dark mode and then reload the page then still it gives dark mode and vice versa.
  // useEffect Hook: This hook is called after the component is rendered. It checks if there's any previously saved mode in the local storage. If the saved mode is "dark", it sets the darkMode state to true and adds the "dark" class to the root HTML element. This ensures that if the user had selected dark mode earlier and reloads the page, the dark mode persists.
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode ? "dark" : "light");
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? "bg-black" : "bg-white"}`}>
      <div className="p-4 float-right">
        <button
          className={darkMode ? "text-white" : "text-black"}
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <BsFillSunFill
              className="w-7 h-7 hover:scale-110"
              title="Light Mode"
            />
          ) : (
            <MdDarkMode className="w-7 h-7 hover:scale-110" title="Dark Mode" />
          )}
        </button>
      </div>
      <Dashboard darkModey={darkMode} />
    </div>
  );
}

export default DarkMode;
