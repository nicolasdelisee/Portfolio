import React from "react";
import TimelineDates from "../data/TimelineDates";
import "./Timeline.scss";

const Timeline = () => {
  return (
    <div>
      <section id="cd-timeline" className="cd-container">
        {TimelineDates.map((job, id) => (
          <div key={id} className="cd-timeline-block">
            <div className="cd-timeline-img cd-picture"></div>

            <div className="cd-timeline-content">
              <h2 className="job-name">{job.title}</h2>
              <div className="timeline-content-info">
                <span className="timeline-content-info-title">
                  <i className="fa fa-certificate" aria-hidden="true"></i>
                  {job.place}
                </span>
                <span className="timeline-content-info-date">
                  <i className="fa fa-calendar-o" aria-hidden="true"></i>
                  {job.date}
                </span>
              </div>
              <p className="job-description">{job.description}</p>
              <ul className="content-skills">
                {job.softwares.map((software, id) => (
                  <li key={id} className="job-languages">
                    {software}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Timeline;
