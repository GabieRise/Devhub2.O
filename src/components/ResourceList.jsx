import { useState } from "react";
import resources from "../data/resources";
import ResourceCard from "./ResourceCard";
import FilterButtons from "./FilterButtons";

function ResourceList() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredResources = resources.filter(
    (item) =>
      selectedCategory === "all" || item.category === selectedCategory
  );

  return (
    <>
      <FilterButtons
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <section className="resources">
        {filteredResources.map((item, index) => (
          <ResourceCard
            key={index}
            title={item.title}
            description={item.description}
            links={item.links}
          />
        ))}
      </section>
    </>
  );
}

export default ResourceList;
