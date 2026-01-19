import { useEffect, useRef } from "react";

function ResourceCard({
  title,
  description,
  resources,
  note,
  onNoteChange
}) {
  const textareaRef = useRef(null);
  const MAX_CHARS = 200;
  

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [note]);

  return (
    <div className="resource-card">
      <h3>{title}</h3>
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

      <textarea
        ref={textareaRef}
        placeholder="Write your notes here..."
        value={note}
        maxLength={MAX_CHARS}
        onChange={(e) => onNoteChange(title, e.target.value)}
        rows={1}
      />

      <div className="char-count">
        {/* {note.length} / {MAX_CHARS} */}
      </div>
    </div>
  );
}

export default ResourceCard;
