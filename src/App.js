import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/NavBar/navbar";
import Home from "./component/home/home";
import Detail from "./component/characterDetail/detail";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Detail />
    </>
  );
}

export default App;
