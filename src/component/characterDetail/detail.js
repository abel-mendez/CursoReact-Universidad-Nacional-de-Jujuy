import React from "react";
import data from "../../data/data.json";
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
      <div>
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
        <div>
          <h3>
            {this.state.currentElement.name +
              " " +
              this.state.currentElement.lastname}
          </h3>
          <div>
            <img src={this.state.currentElement.photo}></img>
          </div>
          <div> Edad: {this.state.currentElement.age + " años"}</div>
          <div> Altura: {this.state.currentElement.height + " cm"}</div>
          <div>Peso: {this.state.currentElement.weight + " kg"}</div>
        </div>
      </div>
    );
  }
}
