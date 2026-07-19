import "./NoResults.css";

function NoResults() {
  return (
    <section className="no-results">
      <div className="no-results__icon">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" stroke="#d1d5db" strokeWidth="2" />
          <path d="M16 20C18 22 20 24 24 24C28 24 30 22 32 20" stroke="#d1d5db" strokeWidth="2" strokeLinecap="round" />
          <path d="M24 28V32" stroke="#d1d5db" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <h3 className="no-results__title">Nothing found</h3>
      <p className="no-results__text">
        Sorry, but nothing matched your search terms.
      </p>
    </section>
  );
}

export default NoResults;
