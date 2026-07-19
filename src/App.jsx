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
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [newsCards, setNewsCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [savedArticles, setSavedArticles] = useState([]);

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

  const handleSignIn = ({ email, password }) => {
    // In production, this calls the backend API.
    // For now, mock a successful login
    setCurrentUser({ name: "Elise", email });
    setLoggedIn(true);
    setIsSignInOpen(false);
  };

  const handleSignUp = ({ name, email, password }) => {
    // In production, this calls the backend API.
    // For now, mock a successful registration + auto-login
    setCurrentUser({ name, email });
    setLoggedIn(true);
    setIsSignUpOpen(false);
    setCurrentPage("main");
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setCurrentUser(null);
    setCurrentPage("main");
  };

  const handleSaveArticle = (card) => {
    setSavedArticles((prev) => {
      const exists = prev.find((a) => a.link === card.link);
      if (exists) return prev.filter((a) => a.link !== card.link);
      return [card, ...prev];
    });
  };

  const handleDeleteArticle = (card) => {
    setSavedArticles((prev) => prev.filter((a) => a.link !== card.link));
  };

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
        currentUser={currentUser}
        onSignIn={handleSignInClick}
        onLogout={handleLogout}
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
          onSaveArticle={handleSaveArticle}
        />
      ) : (
        <SavedNews
          loggedIn={loggedIn}
          currentUser={currentUser}
          savedArticles={savedArticles}
          onDeleteArticle={handleDeleteArticle}
        />
      )}
      <Footer />
      <SignInModal
        isOpen={isSignInOpen}
        onClose={handleSignInClose}
        onSignUpClick={handleSignUpClick}
        onSignIn={handleSignIn}
      />
      <SignUpModal
        isOpen={isSignUpOpen}
        onClose={handleSignUpClose}
        onSignInClick={handleSignInFromUp}
        onSignUp={handleSignUp}
      />
    </div>
  );
}

export default App;
