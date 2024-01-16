import React from "react";

function Footer() {
  return (
    <div className="container">
      <div className="footer d-flex flex-column">
        <div className="top-col d-flex justify-content-around">
          <div className="logo">
            <img src="/img/logo.png" alt="logo" />
            <p>
              Follow us on{" "}
              <img
                src="/img/insta-logo.png"
                className="icons"
                alt="instagram"
              />{" "}
              <img
                src="/img/linkedIn-logo.png"
                className="icons"
                alt="linkedIn"
              />
            </p>
          </div>
          <div className="content">
            <div className="connect">
              <p>Connect with us</p>
              <div className="sub-cont">
                <p>
                  <img src="/img/email.png" className="icons" alt="email" />{" "}
                  info@orbitjobs.id
                </p>
                <p>
                  <img
                    src="/img/whatsapp.png"
                    className="icons"
                    alt="whatsapp"
                  />
                  62 811-1921-8222
                </p>
              </div>
            </div>
          </div>
          <div className="connect">
            <p>Terms & Conditions</p>
            <div className="sub-cont">
              <p>Privacy Policy</p>
              <p>About US</p>
              <p>FAQ</p>
            </div>
          </div>
          <div className="connect">
            <p>Blogs</p>
            <div className="sub-cont">
              <p>For Jobseekers</p>
              <p>For Employers</p>
            </div>
          </div>
        </div>
        <div className="bottom-col text-center">
          <hr />
          <p>
            ©2022 <span>Orbit Jobs </span>All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
