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
        <img src={this.props.url}></img>
        <div>{this.props.name}</div>
      </div>
    );
  }
}
