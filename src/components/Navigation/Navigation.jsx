import "./Navigation.css";
import profileIcon from "../../assets/icons/profile.svg";

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
              <img src={profileIcon} alt="User" width="16" height="16" />
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
