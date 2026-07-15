import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ loggedIn }) {
  return (
    <header className="header">
      <p className="header__logo">NewsExplorer</p>
      <Navigation loggedIn={loggedIn} />
    </header>
  );
}

export default Header;
