import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ loggedIn, onSignIn }) {
  return (
    <header className="header">
      <p className="header__logo">NewsExplorer</p>
      <Navigation loggedIn={loggedIn} onSignIn={onSignIn} />
    </header>
  );
}

export default Header;
