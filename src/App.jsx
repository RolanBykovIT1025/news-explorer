import { useState, useCallback } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import SavedNews from "./components/SavedNews/SavedNews";
import Footer from "./components/Footer/Footer";
import SignInModal from "./components/SignInModal/SignInModal";
import SignUpModal from "./components/SignUpModal/SignUpModal";
import { searchNews, getNewsCardData } from "./utils/NewsApi";
import "./App.css";

const PAGE_SIZE = 3;

function App() {
  const [currentPage, setCurrentPage] = useState("main");
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [newsCards, setNewsCards] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [savedArticles, setSavedArticles] = useState([]);
  const [currentKeyword, setCurrentKeyword] = useState("");
  const [visibleCount, setVisibleCount] = useState(0);

  const isLoading = isSearching || isLoadingMore;

  const handleSearch = useCallback((keyword) => {
    setIsSearching(true);
    setSearchError(null);
    setCurrentKeyword(keyword);
    setVisibleCount(0);

    searchNews(keyword, 1)
      .then((data) => {
        const cards = (data.articles || []).map((a) =>
          getNewsCardData(a, keyword)
        );
        setNewsCards(cards);
        setVisibleCount(Math.min(PAGE_SIZE, cards.length));
        setHasSearched(true);
      })
      .catch((err) => {
        setSearchError(err.message);
        setNewsCards([]);
        setHasSearched(true);
      })
      .finally(() => setIsSearching(false));
  }, []);

  const handleShowMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, newsCards.length));
  }, [newsCards.length]);

  const handleSignIn = ({ email, password }) => {
    const name = email.split("@")[0].replace(/[._-]/g, " ");
    const displayName = name
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join(" ");
    setCurrentUser({ name: displayName, email });
    setLoggedIn(true);
    setIsSignInOpen(false);
  };

  const handleSignUp = ({ name, email, password }) => {
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

  const visibleCards = newsCards.slice(0, visibleCount);
  const hasMore = visibleCount < newsCards.length;

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
          isSearching={isSearching}
          isLoadingMore={isLoadingMore}
          isLoading={isLoading}
          newsCards={visibleCards}
          hasSearched={hasSearched}
          onSearch={handleSearch}
          searchError={searchError}
          savedArticles={savedArticles}
          onSaveArticle={handleSaveArticle}
          onSignInClick={handleSignInClick}
          hasMore={hasMore}
          onShowMore={handleShowMore}
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
