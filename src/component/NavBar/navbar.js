import React from "react";
import "./navbar.css";
export default class Navbar extends React.Component {
  /*constructor() {
    super();
  }*/
  render() {
    return (
      <header className="header">
        <nav className="nav">
          <div>Kimetsu Details</div>
          <ul className="ul">
            <li>
              <a href="#">Character Detail</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
