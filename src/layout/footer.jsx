import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="simple-footer">
        <footer
          className="text-center text-white fixed-bottom"
          style={{ backgroundColor: "rgb(74, 199, 141)" }}
        >
          {/* Grid container */}
          <div className="container" />
          {/* Grid container */}
          {/* Copyright */}
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2020 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">
              shovontanvir124@gmail.com
            </a>
          </div>
          {/* Copyright */}
        </footer>
      </div>
    );
  }
}

export default Footer;
