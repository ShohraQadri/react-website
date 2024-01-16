import React from "react";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faGlobe, faLocation, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="main-container">
      <div className="bg-img">
        <header>
          <div className="container">
            <nav class="navbar navbar-expand-lg ">
              <div class="container">
                <div className="logo">
                  <a href="#">
                    <img src={logo} alt="logo" />
                  </a>
                </div>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">
                        Home
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        My Job
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <FontAwesomeIcon icon={faBell} />
                      </a>
                    </li>

                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <FontAwesomeIcon icon={faUser} />
                      </a>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <a class="dropdown-item" href="#">
                            Profile
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Password Change
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            <p color="danger">log out</p>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        | For Employer
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <button className="btn btn-sm btn-primary black mt-2 w-auto ms-1 ">
                          <FontAwesomeIcon icon={faGlobe} className="pe-1" />
                          En <i class="fa-solid fa-chevron-down"></i>
                        </button>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            <div className="heading-container">
              <h1>
                <strong>Find the perfect job for you</strong>
              </h1>
              <p className="gray-color font-size-18 mt-2 mb-0">
                Search your career opportunity through 12,800 jobs
              </p>
              <div className="input-area d-flex  justify-content-between">
              

              <input
                type="text" className="w-50"
                placeholder="Search by job title, company or keywords  "
              />
              
              <div className="div-inpt-2">
              <FontAwesomeIcon icon={faLocation} className="pe-1" />    
              <input
                type="text" className="w-auto"
                placeholder=" Province,city, or region"
              />
               <button className="btn btn-primary random-offer-btn">
               <FontAwesomeIcon icon={faSearch}  />
               </button>
              </div>
              </div>
              <p className="font-size-16 mt-2 ">
                <strong>Popular Searches</strong>
              </p>
              <div className="btn-pnl d-flex gap-2">
                <span>
                  <button type="button" class="btn">
                    Desginer
                  </button>
                </span>
                <span>
                  <button type="button" class="btn">
                    Writer
                  </button>
                </span>
                <span>
                  <button type="button" class="btn">
                    Team Leader
                  </button>
                </span>
                <span>
                  <button type="button" class="btn">
                    Senior
                  </button>
                </span>
                <span>
                  <button type="button" class="btn">
                    Web Designer
                  </button>
                </span>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
