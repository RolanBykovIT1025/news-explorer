import "./Navigation.css";

function Navigation({ loggedIn, currentUser, onSignIn, onLogout, currentPage, onPageChange }) {
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
        <div className="nav__profile">
          <button className="nav__profile-btn" type="button" onClick={onLogout} title="Sign out">
            <span className="nav__profile-name">{currentUser?.name || "User"}</span>
            <span className="nav__profile-icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.5" />
                <path d="M2 14C2 10.6863 4.68629 8 8 8C11.3137 8 14 10.6863 14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
          </button>
        </div>
      ) : (
        <button className="nav__signin-btn" type="button" onClick={onSignIn}>
          Sign in
        </button>
      )}
    </nav>
  );
}

export default Navigation;
