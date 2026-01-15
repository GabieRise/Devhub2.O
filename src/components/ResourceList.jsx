import { useState } from "react";
import ResourceCard from "./ResourceCard";
import resourcesData from "../data/resources";

function ResourceList() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredResources = resourcesData.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" ||
      item.title.toLowerCase() === selectedCategory;

    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Search input */}
      <input
        type="text"
        placeholder="Search resources..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Filter buttons */}
      <div className="filters">
        <button onClick={() => setSelectedCategory("all")}>All</button>
        <button onClick={() => setSelectedCategory("html")}>HTML</button>
        <button onClick={() => setSelectedCategory("css")}>CSS</button>
        <button onClick={() => setSelectedCategory("javascript")}>JavaScript</button>
      </div>

      {/* Cards */}
      <section className="grid">
        {filteredResources.map((item, index) => (
          <ResourceCard key={index} {...item} />
        ))}
      </section>
    </>
  );
}

export default ResourceList;
