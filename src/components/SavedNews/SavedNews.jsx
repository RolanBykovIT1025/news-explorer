import "./SavedNews.css";

function SavedNews({ loggedIn, currentUser, savedArticles, onDeleteArticle }) {
  const savedCards = savedArticles || [];
  const keywords = [...new Set(savedCards.map((c) => c.keyword))];
  const userName = currentUser?.name || "User";

  const formatDate = (dateStr) => {
    if (!dateStr) return "November 4, 2020";
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  if (!loggedIn) {
    return (
      <main className="saved-news">
        <section className="saved-news__header">
          <p className="saved-news__intro">Saved articles</p>
          <h1 className="saved-news__title">
            Sign in to see your saved articles
          </h1>
        </section>
      </main>
    );
  }

  return (
    <main className="saved-news">
      <section className="saved-news__header">
        <p className="saved-news__intro">Saved articles</p>
        <h1 className="saved-news__title">
          {userName}, you have {savedCards.length} saved articles
        </h1>
        {keywords.length > 0 && (
          <p className="saved-news__keywords">
            By keywords: <strong>{keywords.join(", ")}</strong>
          </p>
        )}
      </section>

      {savedCards.length > 0 ? (
        <section className="saved-news__grid-section">
          <div className="saved-news__grid">
            {savedCards.map((card, i) => (
              <article className="saved-news__card" key={i}>
                <a
                  className="saved-news__card-link"
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="saved-news__card-image-wrapper">
                    <img
                      className="saved-news__card-image"
                      src={card.image || "https://via.placeholder.com/400x272?text=News"}
                      alt={card.title}
                    />
                  </div>
                </a>
                <button
                  className="saved-news__card-delete"
                  type="button"
                  onClick={() => onDeleteArticle(card)}
                  aria-label="Remove article"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13 3L3 13M3 3L13 13" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
                <span className="saved-news__card-keyword">{card.keyword}</span>
                <div className="saved-news__card-body">
                  <p className="saved-news__card-date">
                    {formatDate(card.date)}
                  </p>
                  <h3 className="saved-news__card-title">{card.title}</h3>
                  <p className="saved-news__card-text">{card.text}</p>
                  <p className="saved-news__card-source">{card.source}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : (
        <section className="saved-news__empty">
          <p className="saved-news__empty-text">
            You haven't saved any articles yet. Search for news and save them here.
          </p>
        </section>
      )}
    </main>
  );
}

export default SavedNews;
