import CodeEditor from "./components/codeEditor";

function ResourceCard({ resource, notes, setNotes }) {
  const MAX_CHARS = 1000;

  // ✅ CRITICAL FIX
  const note = notes[resource.id] || "";

  function handleChange(e) {
    setNotes(prev => ({
      ...prev,
      [resource.id]: e.target.value
    }));
  }

  return (
    <article className="card">
      <h2>{resource.title}</h2>
      <p>{resource.description}</p>

      <CodeEditor initialCode={resource.exampleCode || ""} />

      <ul>
        {resource.links.map(link => (
          <li key={link.url}>
            <a href={link.url} target="_blank" rel="noreferrer">
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      <textarea
        placeholder="Your notes..."
        value={note}
        onChange={handleChange}
        maxLength={MAX_CHARS}
      />

      <small>
        {note.length} / {MAX_CHARS}
      </small>
    </article>
  );
}

export default ResourceCard;
