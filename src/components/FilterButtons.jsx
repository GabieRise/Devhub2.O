function FilterButtons({ selectedCategory, setSelectedCategory }) {
  return (
    <div className="filters">
      <button
        className={selectedCategory === "all" ? "active" : ""}
        onClick={() => setSelectedCategory("all")}
      >
        All
      </button>

      <button
        className={selectedCategory === "html" ? "active" : ""}
        onClick={() => setSelectedCategory("html")}
      >
        HTML
      </button>

      <button
        className={selectedCategory === "css" ? "active" : ""}
        onClick={() => setSelectedCategory("css")}
      >
        CSS
      </button>

      <button
        className={selectedCategory === "javascript" ? "active" : ""}
        onClick={() => setSelectedCategory("javascript")}
      >
        JavaScript
      </button>
      <button
        className={selectedCategory === "React" ? "active" : ""}
        onClick={() => setSelectedCategory("React")}
      >
        React
      </button>
    </div>
  );
}

export default FilterButtons;
