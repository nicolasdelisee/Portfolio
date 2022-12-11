import React from 'react';
import Project from '../data/Project';
import "./projects.scss";

const Projects = () => {
    return (
        <div id="timeline">

            {Project.map((e) => (
                 <div className="tl-item">
                    <div className="tl-bg"><img src={e.url_image} alt={e.project_name} className={`tl-bg ${e.classname_image}`}/></div>
                    <div className="tl-type">{e.project_type}
                    </div>
                    <div className="tl-content">
                        <h1>{e.project_name}</h1>
                        <h5>({e.project_duration})</h5>
                        <p>{e.project_description}</p>
                    </div>
                </div>
            ))}


        </div>
    );
}

export default Projects;
