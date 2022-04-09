/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import headerImage from "../../images/shovon.jpeg";
class Home extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div
          className="card text-center"          
        >
          <img
            className="card-img-top mx-auto mt-5"
            src={headerImage}
            alt="Card image cap"
          />
          <div className="card-body m-5">
            <h5 className="card-title">Software Engineer</h5>
            <p className="card-text">
              An organised and motivated employee capable of time management and
              working under pressure in all environments. Seeking to join Acme
              Corp as an Administrative Assistant to assist in ensuring good
              internal communications and budget management.
            </p>
            <a
              href="/"
              className="btn mx-auto"
              style={{ backgroundColor: "rgb(74, 199, 141)", color: "white"}}
            >
             Download Resume
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
