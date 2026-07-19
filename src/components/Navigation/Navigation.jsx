import "./Navigation.css";

function Navigation({ loggedIn, onSignIn, currentPage, onPageChange }) {
  return (
    <nav className="nav">
      <button
        className={`nav__link${currentPage === "main" ? " nav__link_active" : ""}`}
        type="button"
        onClick={() => onPageChange("main")}
      >
        Home
      </button>
      {loggedIn && (
        <button
          className={`nav__link${currentPage === "saved" ? " nav__link_active" : ""}`}
          type="button"
          onClick={() => onPageChange("saved")}
        >
          Saved articles
        </button>
      )}
      {loggedIn ? (
        <button className="nav__profile-btn" type="button">
          <span className="nav__profile-name">Elise</span>
          <span className="nav__profile-icon">👤</span>
        </button>
      ) : (
        <button className="nav__signin-btn" type="button" onClick={onSignIn}>
          Sign in
        </button>
      )}
    </nav>
  );
}

export default Navigation;
