function ResourceCard({ title, description, resources }) {
  return (
    <article className="resource-card">
      <h2>{title}</h2>
      <p>{description}</p>

      <h3>Resources</h3>
      <ul>
        {resources.map((resource, index) => (
          <li key={index}>
            <a href={resource.link} target="_blank">
              {resource.name}
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default ResourceCard;
