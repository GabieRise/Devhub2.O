import ResourceCard from "./ResourceCard";
import "./App.css";

function ResourceList({ resources, selectedCategory, notes, setNotes }) {
  const filteredResources =
    selectedCategory === "all"
      ? resources
      : resources.filter(
          resource => resource.category === selectedCategory
        );

  return (

      <section className="cards">
        {filteredResources.map(resource => (
          <ResourceCard
            key={resource.id}
            resource={resource}
            notes={notes}
            setNotes={setNotes}
          />
        ))}
      </section>
    
  );
}

export default ResourceList;

