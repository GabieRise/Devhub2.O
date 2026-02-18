import { useState, useEffect } from "react";
import ResourceList from "./ResourceList.jsx";
import resourcesData from "./data/resources.js";
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [notes, setNotes] = useState(() => {
    return JSON.parse(localStorage.getItem("notes")) || {};
  });

  //new theme state
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("darkMode")) || "false";
  });

  //save notes and theme to local storage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [notes]);

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  }
 
  // console.log("App rendered");
  const totalResources = resourcesData.length;

  const completedResources = Object.values(notes).filter(
  note => note.trim() !== ""
  ).length;

  const progressPercent = totalResources === 0
  ? 0
  : (completedResources / totalResources) * 100;

  return (
    <main>
      <h1>DevHub</h1>
      <button onClick={toggleTheme}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <p>Welcome to DevHub a learning platform for Tech enthusiasts</p>
      <div className="filters">
        <button onClick={() => setSelectedCategory("all")}>All</button>
        <button onClick={() => setSelectedCategory("html")}>HTML</button>
        <button onClick={() => setSelectedCategory("css")}>CSS</button>
        <button onClick={() => setSelectedCategory("javascript")}>JavaScript</button>
        <button onClick={() => setSelectedCategory("React")}>React</button>
      </div>
      {/* <FilterButtons/> */}
      <div className="progress-wrapper"></div>
      <p className="progress-text">
        Progress: {completedResources} / {totalResources} 
      </p>
      <div className="progress-bar">
        <div 
        className="progress-fill" 
        style={{width: `${progressPercent}%` }}>
        </div>
       </div>
       {/* Resourcelist */}
      <ResourceList
        resources={resourcesData}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        notes={notes}
        setNotes={setNotes}
      />
      
    </main>
  );
}

export default App;