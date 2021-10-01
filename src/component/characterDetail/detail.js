import React from "react";
import "./detail.css";
import { useState, useEffect } from "react";
export default function Detail(props) {
  const [selected, setSelected] = useState(props.characters[0]);
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    setCharacters(props.characters);
    setSelected(props.characters[0]);
  }, [props.characters, characters]);

  const onChangeInput = (event) => {
    setSelected(
      characters.find((element) => element.id === event.target.value)
    );
  };
  return (
    <div className="container">
      <select
        onChange={(event) => {
          onChangeInput(event);
        }}
      >
        {characters.map((element) => (
          <option key={element.id} value={element.id}>
            {element.name + " " + element.lastname}
          </option>
        ))}
      </select>
      <div className="container">
        <h3>{selected.name + " " + selected.lastname}</h3>
        <div>
          <img src={selected.photo} alt="Personaje de Kimetsu"></img>
        </div>
        <h3> Character Details</h3>
        <p> Edad: {selected.age + " años"}</p>
        <p> Altura: {selected.height + " cm"}</p>
        <p>Peso: {selected.weight + " kg"}</p>
      </div>
    </div>
  );
}
