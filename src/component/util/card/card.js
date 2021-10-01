import React from "react";
import "./card.css";
export default class Card extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="card">
        <h3>Character</h3>
        <div>
          <img src={this.props.url} alt="Personaje de kimetsu "></img>
        </div>
        <div className="name">{this.props.name}</div>
      </div>
    );
  }
}
