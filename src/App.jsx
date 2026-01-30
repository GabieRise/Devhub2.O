import { useState, useEffect } from "react";
import ResourceList from "./ResourceList.jsx";
import resourcesData from "./data/resources.js";
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [notes, setNotes] = useState(() => {
    return JSON.parse(localStorage.getItem("notes")) || {};
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  console.log("App rendered");
  return (
    <main>
      <h1>DevHub</h1>

      <div className="filters">
        <button onClick={() => setSelectedCategory("all")}>All</button>
        <button onClick={() => setSelectedCategory("html")}>HTML</button>
        <button onClick={() => setSelectedCategory("css")}>CSS</button>
        <button onClick={() => setSelectedCategory("javascript")}>JavaScript</button>
      </div>

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
