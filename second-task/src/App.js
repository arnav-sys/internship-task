import "./App.css";
import Body from "./components/body/body";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  var w = window.innerWidth;
  console.log(w);
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default App;
