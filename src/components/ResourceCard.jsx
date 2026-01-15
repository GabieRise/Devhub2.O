function ResourceCard({ title, description, links }) {
  return (
    <article className="resource-card">
      <h3>{title}</h3>
      <p>{description}</p>

      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default ResourceCard;
