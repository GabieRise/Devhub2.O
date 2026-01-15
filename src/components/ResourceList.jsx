import { useState } from "react";
import ResourceCard from "./ResourceCard";
import resources from "../data/resources";

function ResourceList() {
  const [selectedLevel, setSelectedLevel] = useState("all");

  return (
    <>
      <div className="filters">
        <button
          className={selectedLevel === "all" ? "active" : ""}
          onClick={() => setSelectedLevel("all")}
        >
          All
        </button>

        <button
          className={selectedLevel === "beginner" ? "active" : ""}
          onClick={() => setSelectedLevel("beginner")}
        >
          Beginner
        </button>

        <button
          className={selectedLevel === "intermediate" ? "active" : ""}
          onClick={() => setSelectedLevel("intermediate")}
        >
          Intermediate
        </button>

        <button
          className={selectedLevel === "advanced" ? "active" : ""}
          onClick={() => setSelectedLevel("advanced")}
        >
          Advanced
        </button>
      </div>

      <section>
        {resources
          .filter(
            item => selectedLevel === "all" || item.level === selectedLevel
          )
          .map((item, index) => (
            <ResourceCard
              key={index}
              title={item.title}
              description={item.description}
              level={item.level}
              resources={item.resources}
            />
          ))}
      </section>
    </>
  );
}

export default ResourceList;
