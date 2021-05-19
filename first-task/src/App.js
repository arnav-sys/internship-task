import "./App.css";
import Landing from "./components/landing/landing";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Exercise from "./components/exercise/exercise";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Exercise />

      <Footer />
    </div>
  );
}

export default App;
