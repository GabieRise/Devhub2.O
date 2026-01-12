import { useState } from "react";
import FilterButtons from "./FilterButtons";
import ResourceCard from "./ResourceCard";
import resources from "../data/resources";
import  "./ResourceList.css";

function ResourceList() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedLevel, setSelectedLevel] = useState("all");

  return (
    <main>
    <FilterButtons
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
     <div className="filters">
      <button onClick={() => setSelectedCategory("all")}>All</button>
      <button onClick={() => setSelectedCategory("html")}>Beginner</button>
      <button onClick={() => setSelectedCategory("css")}>Intermediate</button>
      <button onClick={() => setSelectedCategory("javascript")}>Advanced</button>
    </div> 
    {/* <div className="level-filters">
      <button onClick={() => setSelectedLevel("all")}>All Levels</button>
      <button onClick={() => setSelectedLevel("beginner")}>Beginner</button>
      <button onClick={() => setSelectedLevel("intermediate")}>Intermediate</button>
      <button onClick={() => setSelectedLevel("advanced")}>Advanced</button>
    </div> */}
       <section>

      {resources
  .filter(item => {
    const categoryMatch =
      selectedCategory === "all" ||
      item.title.toLowerCase() === selectedCategory;

    const levelMatch =
      selectedLevel === "all" ||
      item.level === selectedLevel;

    return categoryMatch && levelMatch;
  })
  .map((item, index) => (
    <ResourceCard
      key={index}
      title={item.title}
      level={item.level}
      description={item.description}
      resources={item.resources}
    />
  ))}
  </section>
  </main>
  );
}

export default ResourceList;