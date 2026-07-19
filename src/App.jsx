import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import SignInModal from "./components/SignInModal/SignInModal";
import SignUpModal from "./components/SignUpModal/SignUpModal";
import "./App.css";

function App() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

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
      <SignUpModal
        isOpen={isSignUpOpen}
        onClose={handleSignUpClose}
        onSignInClick={handleSignInFromUp}
      />
    </div>
  );
}

export default App;
