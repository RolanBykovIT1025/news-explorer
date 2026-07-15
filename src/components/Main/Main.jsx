import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import NewsCard from "../NewsCard/NewsCard";
import About from "../About/About";
import "./Main.css";

function Main() {
  return (
    <main className="main">
      <SearchForm />
      <Preloader />
      <NewsCard />
      <About />
    </main>
  );
}

export default Main;
