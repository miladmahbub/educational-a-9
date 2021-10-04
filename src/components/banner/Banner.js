import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container ">
      <div className="">
        <div className="row d-flex banner align-items-center justify-content-center">
          <div className="col-md-6">
            <h1 className="title">
            Our Mission is to  <br /> Polish your skill
            </h1>
            <p className="text-white text-center mt-3">
                 Register your Account Get free Access to 66,000 Online Courses
                 There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form.
            </p>
            <button className="mt-3 about-btn">About Us</button>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
