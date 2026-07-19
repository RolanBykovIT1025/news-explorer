import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ loggedIn, onSignIn, currentPage, onPageChange }) {
  const isSavedPage = currentPage === "saved";

  return (
    <header className={`header${isSavedPage ? " header_theme_light" : ""}`}>
      <p className={`header__logo${isSavedPage ? " header__logo_theme_light" : ""}`}>
        NewsExplorer
      </p>
      <Navigation
        loggedIn={loggedIn}
        onSignIn={onSignIn}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </header>
  );
}

export default Header;
