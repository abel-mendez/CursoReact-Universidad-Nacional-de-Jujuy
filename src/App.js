import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./component/NavBar/navbar";
import Home from "./component/home/home";
import Detail from "./component/characterDetail/detail";
import About from "./component/footer/about";
import Character from "./component/characterDetail/detailParams";
import data from "./data/data.json";
import { Switch, Route } from "react-router-dom";
function App() {
  const [charactersInfo, setCharactersInfo] = useState([]);
  useEffect(() => {
    setCharactersInfo([...data.Characters]);
  }, []);
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home characters={charactersInfo} />
        </Route>
        <Route exact path="/characterDetail">
          <Detail characters={charactersInfo} />
        </Route>

        <Route path="/characterDetail/:id">
          <Character characters={charactersInfo}></Character>
        </Route>
        <Route path="*">
          <h4>Ruta no encontrada</h4>
        </Route>
      </Switch>
      <About id="about" />
    </>
  );
}

export default App;
