import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import "./Header.css";
import menuIcon from "../../assets/icons/menu.svg";
import closeIcon from "../../assets/icons/close.svg";

function Header({ loggedIn, currentUser, onSignIn, onLogout, currentPage, onPageChange }) {
  const isSavedPage = currentPage === "saved";
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (page) => {
    setMenuOpen(false);
    onPageChange(page);
  };

  const handleSignInClick = () => {
    setMenuOpen(false);
    if (onSignIn) onSignIn();
  };

  return (
    <header className={`header${isSavedPage ? " header_theme_light" : ""}`}>
      <p className={`header__logo${isSavedPage ? " header__logo_theme_light" : ""}`}>
        NewsExplorer
      </p>
      <Navigation
        loggedIn={loggedIn}
        currentUser={currentUser}
        onSignIn={onSignIn}
        onLogout={onLogout}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
      <button
        className={`header__menu-btn${isSavedPage ? " header__menu-btn_theme_light" : ""}`}
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? (
          <img src={closeIcon} alt="Close" width="24" height="24" />
        ) : (
          <img src={menuIcon} alt="Menu" width="24" height="24" />
        )}
      </button>

      {menuOpen && (
        <div className={`header__mobile-menu${isSavedPage ? " header__mobile-menu_theme_light" : ""}`}>
          <button
            className={`header__mobile-link${currentPage === "main" ? " header__mobile-link_active" : ""}`}
            type="button"
            onClick={() => handleNavClick("main")}
          >
            Home
          </button>
          {loggedIn && (
            <button
              className={`header__mobile-link${currentPage === "saved" ? " header__mobile-link_active" : ""}`}
              type="button"
              onClick={() => handleNavClick("saved")}
            >
              Saved articles
            </button>
          )}
          {loggedIn ? (
            <button
              className="header__mobile-logout"
              type="button"
              onClick={() => { setMenuOpen(false); onLogout(); }}
            >
              {currentUser?.name || "User"}
            </button>
          ) : (
            <button
              className="header__mobile-signin"
              type="button"
              onClick={handleSignInClick}
            >
              Sign in
            </button>
          )}
        </div>
      )}
    </header>
  );
}

export default Header;
