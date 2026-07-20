import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import NewsCard from "../NewsCard/NewsCard";
import NoResults from "../NoResults/NoResults";
import About from "../About/About";
import "./Main.css";

function Main({ loggedIn, isSearching, isLoadingMore, isLoading, newsCards, hasSearched, onSearch, searchError, onSaveArticle, savedArticles, onSignInClick, totalResults, onShowMore }) {
  const hasMore = newsCards.length > 0 && newsCards.length < totalResults;
  return (
    <main className="main">
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title">What's going on in the world?</h1>
          <p className="hero__subtitle">
            Find the latest news on any topic and save them in your personal account.
          </p>
          <SearchForm onSearch={onSearch} isLoading={isLoading} />
        </div>
      </section>

      {isSearching && <Preloader />}

      {!isSearching && searchError && (
        <section className="results results_error">
          <p className="results__error-msg">
            Sorry, something went wrong during the request. Please try again.
          </p>
        </section>
      )}

      {!isSearching && hasSearched && !searchError && newsCards.length === 0 && (
        <NoResults />
      )}

      {newsCards.length > 0 && !searchError && (
        <section className="results">
          <h2 className="results__title">Search results</h2>
          <div className="results__grid">
            {newsCards.map((card, i) => (
              <NewsCard
                key={i}
                card={card}
                loggedIn={loggedIn}
                onSaveArticle={onSaveArticle}
                savedArticles={savedArticles}
                onSignInClick={onSignInClick}
              />
            ))}
          </div>
          {hasMore && (
            <button
              className="results__show-more"
              type="button"
              onClick={onShowMore}
              disabled={isLoadingMore}
            >
              {isLoadingMore ? "Loading..." : "Show more"}
            </button>
          )}
        </section>
      )}

      <About />
    </main>
  );
}

export default Main;
