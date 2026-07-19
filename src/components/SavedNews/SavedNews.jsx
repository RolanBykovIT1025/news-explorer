import "./SavedNews.css";

const SAMPLE_SAVED = [
  {
    title: "Nature's Secret Spots: Why Everyone Needs a Special Place Outdoors",
    text: "Ever since I read Richard Louv's influential book about the relationship between nature and the human spirit...",
    date: "2020-11-04",
    source: "TREEHUGGER",
    image: "https://via.placeholder.com/400x272?text=Nature",
    keyword: "Nature",
  },
  {
    title: "The Future of Urban Living in a Post-Pandemic World",
    text: "Cities around the world are rethinking how we live, work, and interact in shared spaces...",
    date: "2020-10-28",
    source: "BBC NEWS",
    image: "https://via.placeholder.com/400x272?text=Urban",
    keyword: "Urban",
  },
  {
    title: "How Technology is Transforming the Way We Learn",
    text: "From virtual classrooms to AI-powered tutoring, education is undergoing a digital revolution...",
    date: "2020-10-15",
    source: "TECHCRUNCH",
    image: "https://via.placeholder.com/400x272?text=Technology",
    keyword: "Technology",
  },
];

function SavedNews({ loggedIn }) {
  const savedCards = SAMPLE_SAVED;
  const keywords = [...new Set(savedCards.map((c) => c.keyword))];

  return (
    <main className="saved-news">
      <section className="saved-news__header">
        <p className="saved-news__intro">Saved articles</p>
        <h1 className="saved-news__title">
          Elise, you have {savedCards.length} saved articles
        </h1>
        <p className="saved-news__keywords">
          By keywords:{" "}
          <strong>
            {keywords.length > 0
              ? keywords.join(", ")
              : "No keywords yet"}
          </strong>
        </p>
      </section>

      <section className="saved-news__grid-section">
        <div className="saved-news__grid">
          {savedCards.map((card, i) => (
            <article className="saved-news__card" key={i}>
              <div className="saved-news__card-image-wrapper">
                <img
                  className="saved-news__card-image"
                  src={card.image}
                  alt={card.title}
                />
                <button
                  className="saved-news__card-delete"
                  type="button"
                  aria-label="Remove article"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13 3L3 13M3 3L13 13" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
                <span className="saved-news__card-keyword">{card.keyword}</span>
              </div>
              <div className="saved-news__card-body">
                <p className="saved-news__card-date">
                  {new Date(card.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
                <h3 className="saved-news__card-title">{card.title}</h3>
                <p className="saved-news__card-text">{card.text}</p>
                <p className="saved-news__card-source">{card.source}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default SavedNews;
