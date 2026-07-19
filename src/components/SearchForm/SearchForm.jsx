import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = keyword.trim();
    if (trimmed && onSearch) {
      onSearch(trimmed);
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-form__input"
        type="text"
        placeholder="Enter topic"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button className="search-form__btn" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
