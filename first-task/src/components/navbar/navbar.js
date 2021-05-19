import React from "react";
import "./navbar.css";

//navbar function which generates a react navbar
function Navbar() {
  return (
    <div className="navbar">
      <div className="navs">
        <a href="#home" className="link logo_container">
          <img
            className="logo"
            src="https://techprep.org/wp-content/uploads/2015/10/main-qimg-6c8f73e7be6eaec7f478028671185ba9.jpg"
          />
        </a>
        <a className="link" href="#home">
          Home
        </a>
        <a className="link active" href="#features">
          Courses
        </a>
        <a className="link" href="#pricing">
          Practice
        </a>
        <div className="btns">
          <span>
            <a href="/#sign-up" className="btn signup-btn">
              Sign up
            </a>{" "}
            <a href="/#login" className="btn login-link">
              Log in
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
