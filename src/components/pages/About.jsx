import React, { Component } from "react";
import { workExperiences } from "../../json/workingExperiences";

class About extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="card text-center">
          <h5 className="card-header main-header">About Me</h5>
          <div className="card-body">
            <p className="card-text">
              <b>
                Experienced Full Stack Web Developer with a demonstrated history
                of working in the internet industry. Skilled in RESTful
                webservices, Javascript,Nodejs,MERN stack
                development,MySQL,MongoDB,PHP Development.Strong engineering
                professional graduated from B.SC in CSE at East West University
                Bangladesh.
              </b>
            </p>
          </div>
        </div>
        <div className="card text-center mt-5">
          <h5 className="card-header main-header">Working experience</h5>
          <div className="container mt-4 mb-4">
            <div className="row">
              {workExperiences.map((data) => {
                return (
                  <div className="col">
                    <div className="card mx-auto" style={{ maxWidth: "18rem" }}>
                      <div id="cardBody" className="card-body">
                        <h5>{data.company}</h5>
                        <p>{data.designation}<br/>{data.joiningDate}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
