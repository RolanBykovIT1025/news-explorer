import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import SignInModal from "./components/SignInModal/SignInModal";
import "./App.css";

function App() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const handleSignInClick = () => setIsSignInOpen(true);
  const handleSignInClose = () => setIsSignInOpen(false);
  const handleSignUpClick = () => {
    setIsSignInOpen(false);
    // TODO: open sign-up modal
  };

  return (
    <div className="app">
      <Header loggedIn={false} onSignIn={handleSignInClick} />
      <Main
        loggedIn={false}
        isLoading={false}
        newsCards={[]}
      />
      <Footer />
      <SignInModal
        isOpen={isSignInOpen}
        onClose={handleSignInClose}
        onSignUpClick={handleSignUpClick}
      />
    </div>
  );
}

export default App;
