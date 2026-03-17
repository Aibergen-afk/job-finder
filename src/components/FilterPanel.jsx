function FilterPanel({ selectedCategory, setSelectedCategory }) {
  return (
    <div>
      <label>Filter: </label>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="IT">IT</option>
        <option value="Design">Design</option>
        <option value="Marketing">Marketing</option>
      </select>
    </div>
  );
}

export default FilterPanel;