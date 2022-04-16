/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import headerImage from "../../images/shovon.jpeg";
class Home extends Component {
  render() {
    return (
      <div className="container mt-2">
        <div className="text-center home">
          <img
            className="card-img-top mx-auto mt-5"
            src={headerImage}
            alt="Card image cap"
          />
          <div>
            <h1 id="my-name" className="mt-3 mx-auto">Tanvir Mahtab</h1>
          </div>
          <div className="card-body">
            <h5 className="card-title mx-auto">Software Engineer</h5>
            <p className="card-text">
              Self-motivated, highly passionate, hardworking person and one year experiences looking
              for an opportunity to work in a challenging organization to utilize my skills and knowledge to work for the growth of the organization.
            </p>
            <a
              href="/"
              className="btn btn-xs mx-auto"
              style={{ background:"#00c9b7", color: "white",padding:"10px",borderRadius:"100px" }}
            >
              <span>Resume Resume</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
