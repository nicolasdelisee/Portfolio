import React from "react";
import Project from "../data/Project";
import "./projects.scss";

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
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
