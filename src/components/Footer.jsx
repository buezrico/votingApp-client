import React from "react";
// import footerlogo from "../assets/techcreek logo.png";

const Footer = () => {
  return (
    <div className="footer d-flex justify-content-center align-items-center">
      <div className=" d-flex-column  align-items-center">
        <p className="fs-5 text-center">
          This Project was created by Okoronkwo Chibueze{" "}
        </p>
        <p className="fs-6 text-center">400 Level, Computer Science</p>
        {/* <div className="container-fluid d-containerF text-center"> */}
        {/* <a className="navbar-brand d-footer " href="index.html"> */}
        {/* <img
              src={footerlogo}
              alt=""
              width="70"
              height="60"
              className="d-inline-block align-text-top f-image"
            /> */}
        {/* </a> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Footer;
