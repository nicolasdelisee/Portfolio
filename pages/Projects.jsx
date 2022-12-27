import React from 'react';
import Project from '../data/Project';
import "./projects.scss";

const Projects = () => {
    return (
        <div id="timeline">

            {Project.map((e) => (
                 <div className="tl-item">
                    <div className="tl-bg"><img src={e.url_image} alt={e.name} className={`tl-bg ${e.classname_image}`}/></div>
                    <div className="tl-type">{e.type}
                    </div>
                    <div className="tl-content">
                        <h1>{e.name}</h1>
                        <h5>({e.duration})</h5>
                        <p>{e.description}</p>
                    </div>
                </div>
            ))}


        </div>
    );
}

export default Projects;
