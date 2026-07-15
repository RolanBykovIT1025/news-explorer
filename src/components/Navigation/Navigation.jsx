import "./Navigation.css";

function Navigation({ loggedIn, onSignIn }) {
  return (
    <nav className="nav">
      <a href="/" className="nav__link nav__link_active">Home</a>
      {loggedIn && <a href="/saved" className="nav__link">Saved articles</a>}
      {loggedIn ? (
        <button className="nav__profile-btn" type="button">
          <span className="nav__profile-name">Elise</span>
          <span className="nav__profile-icon">👤</span>
        </button>
      ) : (
        <button className="nav__signin-btn" type="button" onClick={onSignIn}>Sign in</button>
      )}
    </nav>
  );
}

export default Navigation;
