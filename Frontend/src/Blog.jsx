import React from "react";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <div>
      <div className="container-fluid topbar px-0 d-none d-lg-block">
        <div className="container px-0">
          <div className="row gx-0 align-items-center" style={{ height: 45 }}>
            <div className="col-lg-8 text-center text-lg-start mb-lg-0">
              <div className="d-flex flex-wrap">
                <span className="text-muted me-4">
                  <i className="fas fa-map-marker-alt text-primary me-2" />
                  Find A Location
                </span>
                <span className="text-muted me-4">
                  <i className="fas fa-phone-alt text-primary me-2" />
                 +91 7015548507
                </span>
                <span className="text-muted me-0">
                  <i className="fas fa-envelope text-primary me-2" />
                  Example@gmail.com
                </span>
              </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
              <div className="d-flex align-items-center justify-content-end">
                <a href="#" className="btn btn-primary btn-square rounded-circle me-3">
                  <i className="fab fa-facebook-f text-white" />
                </a>
                <a href="#" className="btn btn-primary btn-square rounded-circle me-3">
                  <i className="fab fa-twitter text-white" />
                </a>
                <a href="#" className="btn btn-primary btn-square rounded-circle me-3">
                  <i className="fab fa-instagram text-white" />
                </a>
                <a href="#" className="btn btn-primary btn-square rounded-circle">
                  <i className="fab fa-linkedin-in text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar Start */}
      <div className="container-fluid sticky-top px-0">
        <div className="container px-0">
          <nav className="navbar navbar-expand-lg navbar-dark bg-white py-3 px-4">
            <Link to="/" className="navbar-brand p-0">
              <h1 className="text-primary m-0">
                <i className="fas fa-donate me-3" />
                Websfdc
              </h1>
            </Link>
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
                <Link to="/" className="nav-item nav-link">Home</Link>
                <Link to="/about" className="nav-item nav-link">About</Link>
                <Link to="/service" className="nav-item nav-link">Service</Link>
                <Link to="/project" className="nav-item nav-link">Project</Link>

                <div className="nav-item dropdown">
                  <span
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </span>
                  <div className="dropdown-menu m-0">
                    <Link to="/blog" className="dropdown-item active">Our Blog</Link>
                    <Link to="/team" className="dropdown-item">Our Team</Link>
                    <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
                    <Link to="/faqs" className="dropdown-item">FAQs</Link>
                    <Link to="/404" className="dropdown-item">404 Page</Link>
                  </div>
                </div>

                <Link to="/contact" className="nav-item nav-link">Contact</Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
      
      <div className="container-fluid bg-breadcrumb">
        <div className="bg-breadcrumb-single" />
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h4 className="text-white display-4 mb-4">Our Blogs</h4>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <span>Pages</span>
            </li>
            <li className="breadcrumb-item active text-primary">Blog</li>
          </ol>
        </div>
      </div>

      <div className="container-fluid blog py-5">
        <div className="container py-5">
          <div className="text-center mx-auto pb-5" style={{ maxWidth: 800 }}>
            <h4 className="text-primary">Our Blogs</h4>
            <h1 className="display-4">Latest Articles &amp; News</h1>
          </div>
          
          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="blog-item bg-light rounded p-4">
                <div className="mb-4">
                  <h4 className="text-primary mb-2">Investment</h4>
                  <p className="mb-0">On Mar 14, 2024 | By Mark D. Brock</p>
                </div>
                <div className="project-img">
                  <img
                    src="assets/img/blog-1.jpg"
                    className="img-fluid w-100 rounded"
                    alt="Blog"
                  />
                </div>
                <div className="my-4">
                  <Link to="#" className="h4">
                    Revisiting Your Investment Goals
                  </Link>
                </div>
                <Link className="btn btn-primary rounded-pill py-2 px-4" to="#">
                  Explore More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid footer py-5">
        <div className="container text-center">
          <p className="text-white mb-0">
            © {new Date().getFullYear()}Websfdc | All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
