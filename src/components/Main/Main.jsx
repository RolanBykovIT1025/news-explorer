import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import NewsCard from "../NewsCard/NewsCard";
import About from "../About/About";
import "./Main.css";

function Main({ loggedIn, isLoading, newsCards }) {
  return (
    <main className="main">
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title">What's going on in the world?</h1>
          <p className="hero__subtitle">
            Find the latest news on any topic and save them in your personal account.
          </p>
          <SearchForm />
        </div>
      </section>

      {isLoading && <Preloader />}

      {newsCards && newsCards.length > 0 && (
        <section className="results">
          <h2 className="results__title">Search results</h2>
          <div className="results__grid">
            {newsCards.map((card, i) => (
              <NewsCard key={i} card={card} loggedIn={loggedIn} />
            ))}
          </div>
          <button className="results__show-more" type="button">Show more</button>
        </section>
      )}

      <About />
    </main>
  );
}

export default Main;
