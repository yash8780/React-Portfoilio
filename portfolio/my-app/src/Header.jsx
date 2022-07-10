import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="App">
        
      <div className="mylink">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="Project">
          Project
        </Link>
        <Link className="link" to="Skills">
          Skills
        </Link>
      </div>
    </div>
  );
}
