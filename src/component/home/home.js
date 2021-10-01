import React from "react";
import { NavLink } from "react-router-dom";
import Card from "../util/card/card";
import "./home.css";
export default class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      characters: props.characters,
    };
  }
  render() {
    return (
      <div className="home">
        {this.state.characters.map((element) => {
          return (
            <NavLink
              exact
              key={element.id}
              to={`/characterDetail/${element.id}`}
            >
              <Card
                name={element.name + " " + element.lastname}
                url={element.photo}
              />
            </NavLink>
          );
        })}
      </div>
    );
  }
}
