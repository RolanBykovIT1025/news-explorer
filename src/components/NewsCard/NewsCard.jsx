import "./NewsCard.css";
import bookmarkIcon from "../../assets/icons/bookmark.svg";
import bookmarkFilledIcon from "../../assets/icons/bookmark-filled.svg";

function NewsCard({ card, loggedIn, onSaveArticle, savedArticles, onSignInClick }) {
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
    if (!loggedIn) {
      if (onSignInClick) onSignInClick();
      return;
    }
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
        <button
          className={`news-card__bookmark${isSaved ? " news-card__bookmark_saved" : ""}`}
          type="button"
          onClick={handleAction}
          aria-label={isSaved ? "Unsave article" : "Save article"}
        >
          <img
            src={isSaved ? bookmarkFilledIcon : bookmarkIcon}
            alt={isSaved ? "Saved" : "Save"}
            width="16"
            height="16"
          />
        </button>
        {!loggedIn && <div className="news-card__tooltip">Sign in to save articles</div>}
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
