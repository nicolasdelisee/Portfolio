import React, { useEffect } from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import desktop from "../src/assets/pictures/desktop2.jpg";
import { gsap } from "gsap";


export default function Home() {
  useEffect(() => {
    gsap.fromTo(".desktop-image", { y: 800, duration: 1 }, { y: 0, duration: 1 });
  }, []);

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
        Testeur QA
      </h3>
      <h4 className="search-title search-title-anime">
        Actuellement en alternance chez Sellsy
      </h4>
      {/* <h4 className="search-title search-title-anime">
        3 semaines en entreprise / 1 semaine à l'école
      </h4> */}
      <NavLink to="/contact">
        <button className="button-homepage button-homepage-anime">
          <span className="button-homepage-anime">Me contacter</span>
        </button>
      </NavLink>
<img className="desktop-image" src={desktop} />
    </div>
  );
}
