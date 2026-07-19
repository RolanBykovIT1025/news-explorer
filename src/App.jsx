import { useState, useCallback } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import SavedNews from "./components/SavedNews/SavedNews";
import Footer from "./components/Footer/Footer";
import SignInModal from "./components/SignInModal/SignInModal";
import SignUpModal from "./components/SignUpModal/SignUpModal";
import { searchNews, getNewsCardData } from "./utils/NewsApi";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("main");
  const [loggedIn] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [newsCards, setNewsCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [searchError, setSearchError] = useState(null);

  const handleSearch = useCallback((keyword) => {
    setIsLoading(true);
    setSearchError(null);

    searchNews(keyword)
      .then((data) => {
        const cards = (data.articles || []).map((a) =>
          getNewsCardData(a, keyword)
        );
        setNewsCards(cards);
        setHasSearched(true);
      })
      .catch((err) => {
        setSearchError(err.message);
        setNewsCards([]);
        setHasSearched(true);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const handlePageChange = (page) => setCurrentPage(page);

  const handleSignInClick = () => setIsSignInOpen(true);
  const handleSignInClose = () => setIsSignInOpen(false);

  const handleSignUpClick = () => {
    setIsSignInOpen(false);
    setIsSignUpOpen(true);
  };

  const handleSignUpClose = () => setIsSignUpOpen(false);

  const handleSignInFromUp = () => {
    setIsSignUpOpen(false);
    setIsSignInOpen(true);
  };

  return (
    <div className="app">
      <Header
        loggedIn={loggedIn}
        onSignIn={handleSignInClick}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      {currentPage === "main" ? (
        <Main
          loggedIn={loggedIn}
          isLoading={isLoading}
          newsCards={newsCards}
          hasSearched={hasSearched}
          onSearch={handleSearch}
          searchError={searchError}
        />
      ) : (
        <SavedNews loggedIn={loggedIn} />
      )}
      <Footer />
      <SignInModal
        isOpen={isSignInOpen}
        onClose={handleSignInClose}
        onSignUpClick={handleSignUpClick}
      />
      <SignUpModal
        isOpen={isSignUpOpen}
        onClose={handleSignUpClose}
        onSignInClick={handleSignInFromUp}
      />
    </div>
  );
}

export default App;
