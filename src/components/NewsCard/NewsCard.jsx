import "./NewsCard.css";

function NewsCard({ card, loggedIn, onSaveArticle, savedArticles }) {
  const formatDate = (dateStr) => {
    if (!dateStr) return "November 4, 2020";
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const isSaved = savedArticles?.some((a) => a.link === card.link);

  const handleAction = () => {
    if (onSaveArticle) onSaveArticle(card);
  };

  return (
    <article className="news-card">
      <a className="news-card__link" href={card.link} target="_blank" rel="noopener noreferrer">
        <div className="news-card__image-wrapper">
          <img
            className="news-card__image"
            src={card.image || "https://via.placeholder.com/400x272?text=News"}
            alt={card.title}
          />
        </div>
      </a>
      <div className="news-card__action">
        {loggedIn ? (
          <button
            className={`news-card__bookmark${isSaved ? " news-card__bookmark_saved" : ""}`}
            type="button"
            onClick={handleAction}
            aria-label={isSaved ? "Unsave article" : "Save article"}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill={isSaved ? "#2f80ed" : "none"}>
              <path d="M13 14L8 10.5L3 14V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H12C12.2652 2 12.5196 2.10536 12.7071 2.29289C12.8946 2.48043 13 2.73478 13 3V14Z" stroke={isSaved ? "#2f80ed" : "#333"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        ) : (
          <div className="news-card__tooltip">Sign in to save articles</div>
        )}
      </div>
      <div className="news-card__body">
        <p className="news-card__date">{formatDate(card.date)}</p>
        <h3 className="news-card__title">{card.title || "Untitled"}</h3>
        <p className="news-card__text">
          {card.text || "No description available."}
        </p>
        <p className="news-card__source">{card.source || "Unknown"}</p>
      </div>
    </article>
  );
}

export default NewsCard;
