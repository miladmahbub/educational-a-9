import React from "react";
import "./Footer.css"


const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="left-container text-start">
                <h1>Start Your Education Career with us</h1>
                <p className="mt-4 ">
                  <small>
                    *There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humour or randomised words which don't look.
                  </small>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="right-footer-container">
                <h4>Subscribe to Our Newsletter to Get Daily Content!</h4>
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Enter Email"
                />
                <br />
                <button className='btn'>Submit</button>
              </div>
            </div>
            <div className="col-md-4">
            <div className="phone d-flex align-items-center justify-content-center mt-4">
                  
                  <div>
                    <h5>+1 8 800 555 35 35</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                  
                  <div>
                    <p>
                      160 Broadway, New York, NY 10038,
                      <br /> 102 1st Avenue, New York, NY 100
                    </p>
                    
                  </div>
                  
                </div>
                <div>
                    <p>
                      miladmahbub99@gmail.com
                    </p>
                    
                  </div>
            </div>
            <p className="mt-5">
                  <small>Milad Mahbub © . All rights reserved.</small>
                </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
