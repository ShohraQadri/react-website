import React from "react";

function Banner() {
  return (
    <div className="container my-5">
      <div className="main-bg d-flex rounded p-1">
        <div className="img-box">
          <img src="/img/mobile.png" className="mobile-img" alt="main-img" />
        </div>
        <div className="content-box m-auto">
          <div className="main-head">
            <h1>
              <strong>
                Download <span>Orbit Jobs</span> app <br /> and find your dream
                job
              </strong>
            </h1>
          </div>
          <div className="sub-head w-75">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
              cupiditate possimus nulla?
            </p>
          </div>
          <div className="btn d-flex gap-4">
            <a
              href="https://store.google.com/?pli=1&hl=en-GB"
              className="flex-basis-1"
            >
              <img src="/img/google-store.png" className="w-100" alt="" />
            </a>
            <a
              href="https://www.apple.com/in/app-store/"
              className="flex-basis-1"
            >
              <img src="/img/app-store.png" className="w-100" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
