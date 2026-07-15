import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header loggedIn={false} />
      <Main
        loggedIn={false}
        isLoading={false}
        newsCards={[]}
      />
      <Footer />
    </div>
  );
}

export default App;
