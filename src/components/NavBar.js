import React from "react";
import "./NavBar.css";
import metadata from "../data/metadata.json";

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="logo">
            <img className="icon" src="retune-logo.png"/>

            </div>
            <div className="nav-links">
                <a
                    href="https://www.github.com/noob-kittu/retune"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fab fa-github"></i>
                </a>
            </div>
        </div>
    );
};

export default NavBar;
