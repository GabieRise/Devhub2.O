function ResourceCard({ title, level, description, resources }) {
  return (
    <article className={`card level ${level}`}>
      <h3>{title}</h3>
      <span className="badge">{level}</span>
      <p>{description}</p>

      <ul>
        {resources.map((res, index) => (
          <li key={index}>
            <a href={res.link} target="_blank" rel="noopener noreferrer">
              {res.name}
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default ResourceCard;
