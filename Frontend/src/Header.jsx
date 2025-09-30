import React from "react";
import { Link } from "react-router-dom"; 

const Header = () => {
  const whatsappNumber = "8091120741";
  const whatsappMessage = encodeURIComponent(
    "Hello! I want to know more about your services."
  );

  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid topbar px-0 d-none d-lg-block">
        <div className="container px-0">
          <div className="row gx-0 align-items-center" style={{ height: 45 }}>
            <div className="col-lg-8 text-center text-lg-start mb-lg-0">
              <div className="d-flex flex-wrap">
                <a
                  href="https://www.google.com/maps/place/Sushma+Infinium/@30.6387037,76.820771,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted me-4"
                >
                  <i className="fas fa-map-marker-alt text-primary me-2" />
                  Find A Location
                </a>

                <a href="tel:+917015548507" className="text-muted me-4">
                  <i className="fas fa-phone-alt text-primary me-2" />
                  +91 7015548507
                </a>
                <a href="mailto:info@websdfc.co.in" className="text-muted me-0">
                  <i className="fas fa-envelope text-primary me-2" />
                  info@websdfc.co.in
                </a>
              </div>
            </div>

    
            <div className="col-lg-4 text-center text-lg-end">
              <div className="d-flex align-items-center justify-content-end">
                <a
                  href="https://www.facebook.com/people/Websfdc-Technology-Pvt-Ltd/61580310165683/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-square rounded-circle nav-fill me-3"
                >
                  <i className="fab fa-facebook-f text-white" />
                </a>
                <a
                  href="https://x.com/websfdc_tech?t=MjGQegl9BVB7bidFXkvptA&s=09"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-square rounded-circle nav-fill me-3"
                >
                  <i className="fab fa-twitter text-white" />
                </a>
                <a
                  href="https://www.instagram.com/websfdc_technology/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-square rounded-circle nav-fill me-3"
                >
                  <i className="fab fa-instagram text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/company/websfdc/posts/?feedView=all"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-square rounded-circle nav-fill me-3"
                >
                  <i className="fab fa-linkedin-in text-white" />
                </a>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-square rounded-circle nav-fill me-0"
                >
                  <i className="fab fa-whatsapp text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar & Hero Start */}
      <div className="container-fluid sticky-top px-0">
        <div
          className="position-absolute bg-dark"
          style={{ left: 0, top: 0, width: "100%", height: "100%" }}
        ></div>
        <div className="container px-0">
          <nav className="navbar navbar-expand-lg navbar-dark bg-white py-3 px-4">
            <a href="/" className="navbar-brand p-0">
              <h1 className="text-primary m-0">
                <i className="fas fa-cloud-sun me-3" />
                Websfdc
              </h1>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto py-0">
                <Link to="/" className="nav-item nav-link active">
                  Home
                </Link>
                <Link to="/about" className="nav-item nav-link">
                  About
                </Link>
                <Link to="/service" className="nav-item nav-link">
                  Service
                </Link>
                <Link to="/blog" className="nav-item nav-link">
                  Blog
                </Link>
                <Link to="/contact" className="nav-item nav-link">
                  Contact
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar & Hero End */}
    </>
  );
};

export default Header;
