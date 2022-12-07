import React, { Component } from "react";
import "./Navbar.css";
import logo from "./logo.png";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <img
                alt="Dorse"
                src={logo}
                style={{
                  height: 100,
                  width: 200,
                }}
              />{" "}
            </li>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
