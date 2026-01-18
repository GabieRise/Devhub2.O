function ResourceCard({ title, description, level, resources }) {
  return (
    <article className={`level ${level}`}>
      <span className="level-badge">{level}</span>

      <h2>{title}</h2>
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
