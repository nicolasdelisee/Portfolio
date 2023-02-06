import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import desktop from "../src/assets/pictures/desktop2.jpg";

export default function Home() {
  const letterName = [
    "N",
    "i",
    "c",
    "o",
    "l",
    "a",
    "s",
    " ",
    "D",
    "e",
    "l",
    "i",
    "s",
    "é",
    "e",
  ];
  return (
    <div className="homepage">
      <div className="title">
        {letterName.map((letter) =>
          letter === "N" || letter === "D" ? (
            <h1 className="name-letter-maj name-letter-maj-anime">{letter}</h1>
            ) : (
              <h1 className="name-letter name-letter-anime">{letter}</h1>
              )
        )}
      </div>
      <h3 className="job-title job-title-anime">
        Développeur Junior Front-End
      </h3>
      <NavLink to="/contact">
        <button className="button-homepage button-homepage-anime1">
          <span className="button-homepage-anime2">ME CONTACTER</span>
        </button>
      </NavLink>
<img className="desktop-image" src={desktop} />
    </div>
  );
}
