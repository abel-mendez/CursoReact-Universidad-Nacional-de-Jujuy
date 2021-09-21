import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/NavBar/navbar";
import Home from "./component/home/home";
import Detail from "./component/characterDetail/detail";
import About from "./component/footer/about";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Detail />
      <About />
    </>
  );
}

export default App;
