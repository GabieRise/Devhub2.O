import "./ResourceCard.css";

function ResourceCard({ title, level, description, resources }) {
  return (
    <article className={`card level ${level}`}>
      <h2>{title}</h2>

      <p>{description}</p>

      <span className="badge">{level}</span>
      
      <h3>Resources</h3>

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
