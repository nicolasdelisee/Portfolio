import React from "react";
import Project from "../data/Project";
import "./projects.scss";
import { NavLink } from "react-router-dom";

const Projects = () => {
  return (
    <div id="timeline">
      {Project.map((e) => (
        <div className="tl-item">
          <div className="tl-bg">
            <img
              src={e.url_image}
              alt={e.name}
              className={`tl-bg ${e.classname_image}`}
            />
          </div>
          <div className="tl-type">
            <h4>{e.type}</h4>
            <h3>{e.name}</h3>
          </div>
          <div className="tl-content">
            <h5>Durée : {e.duration}</h5>
            <p>{e.description}</p>
            {e.has_website && (
              <a href={e.link}>
                {" "}
                <button className="button-homepage button-homepage-anime">
                  <span className="button-homepage-anime">Visiter le site</span>
                </button>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
