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
        All Levels
      </button>

      <button
        className={selectedCategory === "css" ? "active" : ""}
        onClick={() => setSelectedCategory("css")}
      >
        Intermediate
      </button>

      <button
        className={selectedCategory === "javascript" ? "active" : ""}
        onClick={() => setSelectedCategory("javascript")}
      >
        Advanced
      </button>
    </div>
  );
}

export default FilterButtons;
