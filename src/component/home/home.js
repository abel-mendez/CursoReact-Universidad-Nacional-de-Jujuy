import React from "react";
import Card from "../util/card/card";
import data from "../../data/data.json";
import "./home.css";
export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        {data.Characters.map((element) => (
          <Card
            name={element.name + " " + element.lastname}
            url={element.photo}
          />
        ))}
      </div>
    );
  }
}
