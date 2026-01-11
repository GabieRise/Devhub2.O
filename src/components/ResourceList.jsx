import { useState } from "react";
import ResourceCard from "./ResourceCard";

function ResourceList() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const resources = [
    {
      title: "HTML",
      description: "HTML defines the structure of web pages.",
      resources: [
        { name: "MDN HTML Guide", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { name: "W3Schools HTML", link: "https://www.w3schools.com/html/" }
      ]
    },
    {
      title: "CSS",
      description: "CSS controls layout, colors, and responsiveness.",
      resources: [
        { name: "MDN CSS Guide", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { name: "CSS-Tricks", link: "https://css-tricks.com/" }
      ]
    },
    {
      title: "JavaScript",
      description: "JavaScript adds interactivity and logic.",
      resources: [
        { name: "MDN JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "JavaScript.info", link: "https://javascript.info/" }
      ]
    }
  ];

  return (
    <>
     <div className="filters">
      <button onClick={() => setSelectedCategory("all")}>All</button>
      <button onClick={() => setSelectedCategory("html")}>HTML</button>
      <button onClick={() => setSelectedCategory("css")}>CSS</button>
      <button onClick={() => setSelectedCategory("javascript")}>JavaScript</button>
    </div> 
       <section>

      {resources
        .filter(item =>
          selectedCategory === "all" ||
          item.title.toLowerCase() === selectedCategory
        )
        .map((item, index) => (
        <ResourceCard
          key={index}
          title={item.title}
          description={item.description}
          resources={item.resources}
        />
      ))}
    </section>
    </>
  );
}

export default ResourceList;
