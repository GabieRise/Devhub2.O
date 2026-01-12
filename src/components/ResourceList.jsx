import { useState } from "react";
import ResourceCard from "./ResourceCard";

function ResourceList() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedLevel, setSelectedLevel] = useState("all");
    const resources = [
    {
      title: "HTML",
      level: "Beginner",
      description: "HTML defines the structure of web pages.",
      resources: [
        { name: "MDN HTML Guide", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { name: "W3Schools HTML", link: "https://www.w3schools.com/html/" }
      ]
    },
    {
      title: "CSS",
      level: "Intermediate",
      description: "CSS controls layout, colors, and responsiveness.",
      resources: [
        { name: "MDN CSS Guide", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { name: "CSS-Tricks", link: "https://css-tricks.com/" }
      ]
    },
    {
      title: "JavaScript",
      level: "Advanced",
      description: "JavaScript adds interactivity and logic.",
      resources: [
        { name: "MDN JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "JavaScript.info", link: "https://javascript.info/" }
      ]
    }
  ];

  return (
    <main>
     <div className="filters">
      <button onClick={() => setSelectedCategory("all")}>All</button>
      <button onClick={() => setSelectedCategory("html")}>Beginner</button>
      <button onClick={() => setSelectedCategory("css")}>Intermediate</button>
      <button onClick={() => setSelectedCategory("javascript")}>Advanced</button>
    </div> 
    <div className="level-filters">
      <button onClick={() => setSelectedLevel("all")}>All Levels</button>
      <button onClick={() => setSelectedLevel("beginner")}>Beginner</button>
      <button onClick={() => setSelectedLevel("intermediate")}>Intermediate</button>
      <button onClick={() => setSelectedLevel("advanced")}>Advanced</button>
    </div>
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