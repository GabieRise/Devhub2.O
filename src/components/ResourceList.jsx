import { useState } from "react";
import ResourceCard from "./ResourceCard";
import resourcesData from "../data/resources";

function ResourceList() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [completed, setCompleted] = useState(
    JSON.parse(localStorage.getItem("completed")) || []
  );

  const toggleComplete = (id) => {
    const updated = completed.includes(id)
      ? completed.filter((item) => item !== id)
      : [...completed, id];

    setCompleted(updated);
    localStorage.setItem("completed", JSON.stringify(updated));
  };

  const progress = (completed.length / resourcesData.length) * 100;

  const filteredResources = resourcesData.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" ||
      item.id === selectedCategory;

    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Progress */}
      <div className="progress">
        <p>
          Progress: {completed.length} / {resourcesData.length} completed
        </p>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search resources..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Filters */}
      <div className="filters">
        <button onClick={() => setSelectedCategory("all")}>All</button>
        <button onClick={() => setSelectedCategory("html")}>HTML</button>
        <button onClick={() => setSelectedCategory("css")}>CSS</button>
        <button onClick={() => setSelectedCategory("javascript")}>
          JavaScript
        </button>
      </div>

      {/* Cards */}
      <section className="grid">
        {filteredResources.map((item) => (
          <ResourceCard
            key={item.id}
            title={item.title}
            description={item.description}
            resources={item.resources}
            completed={completed.includes(item.id)}
            onToggle={() => toggleComplete(item.id)}
          />
        ))}
      </section>
    </>
  );
}

export default ResourceList;

