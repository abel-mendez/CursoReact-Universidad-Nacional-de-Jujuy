import React from "react";
import data from "../../data/data.json";
import "./detail.css";
export default class Detail extends React.Component {
  constructor() {
    super();
    this.state = {
      currentElement: data.Characters[0],
    };
  }
  onChangeInput = (event) => {
    this.setState(() => {
      return {
        currentElement: data.Characters.find(
          (element) => element.id == event.target.value
        ),
      };
    });
  };
  render() {
    return (
      <div className="container">
        <select
          onChange={(event) => {
            this.onChangeInput(event);
          }}
        >
          {data.Characters.map((element) => (
            <option value={element.id}>
              {element.name + " " + element.lastname}
            </option>
          ))}
        </select>
        <div className="container">
          <h3>
            {this.state.currentElement.name +
              " " +
              this.state.currentElement.lastname}
          </h3>
          <div>
            <img src={this.state.currentElement.photo}></img>
          </div>
          <h3> Character Details</h3>
          <p> Edad: {this.state.currentElement.age + " años"}</p>
          <p> Altura: {this.state.currentElement.height + " cm"}</p>
          <p>Peso: {this.state.currentElement.weight + " kg"}</p>
        </div>
      </div>
    );
  }
}
