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
        Développeur web Full-Stack
      </h3>
      <h4>
        Recherche de contrat de professionnalisation
      </h4>
      <h4>
        3 semaines en entreprise / 1 semaine à l'école
      </h4>
      <NavLink to="/contact">
        <button className="button-homepage button-homepage-anime1">
          <span>Me contacter</span>
        </button>
      </NavLink>
<img className="desktop-image" src={desktop} />
    </div>
  );
}
