import React from "react";
import "./Skills.css";
// import { Link } from "react-router-dom";
export default function Skills() {
  return (
    <div className="App">
      <h1 style={{color:"white"}}>My Skills</h1>
      <div id="container">
        <div id="Skills">
          <h2> Skills </h2>
          <ol>
            <li>Programming (C, C++, Java)</li>
            <li>
              Web (HTML5, CSS3, Javacript)
            </li>
            <li>
              Design (Figma,XD,Ai,Ps)
            </li>
            <li> Backend (PHP,JSP,NodeJs) </li>
          </ol>
        </div>

        <div id="Hobbies">
          <h2> Hobbies </h2>
          <ul>
            <li> Arts & Designing </li>
            <li>Coding & Solving Problems </li>
            <li> Playing Music (Guitar) </li>
            <li> Sports (Cricket,Football)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
