function ResourceCard({ title, description, resources, completed, onToggle }) {
  return (
    <article className={completed ? "completed" : ""}>
      <h2>{title}</h2>
      <p>{description}</p>

      <ul>
        {resources.map((res, index) => (
          <li key={index}>
            <a href={res.link} target="_blank" rel="noreferrer">
              {res.name}
            </a>
          </li>
        ))}
      </ul>

      <button onClick={onToggle}>
        {completed ? "✅ Completed" : "Mark as Complete"}
      </button>
    </article>
  );
}

export default ResourceCard;
