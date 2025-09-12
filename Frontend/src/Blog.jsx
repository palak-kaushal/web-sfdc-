import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid topbar px-0 d-none d-lg-block">
        <div className="container px-0">
          <div className="row gx-0 align-items-center" style={{ height: 45 }}>
            <div className="col-lg-8 text-center text-lg-start mb-lg-0">
              <div className="d-flex flex-wrap">
                <a href="#" className="text-muted me-4">
                  <i className="fas fa-map-marker-alt text-primary me-2" />
                  Find A Location
                </a>
                <a href="#" className="text-muted me-4">
                  <i className="fas fa-phone-alt text-primary me-2" />
                  +01234567890
                </a>
                <a href="#" className="text-muted me-0">
                  <i className="fas fa-envelope text-primary me-2" />
                  Example@gmail.com
                </a>
              </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
              <div className="d-flex align-items-center justify-content-end">
                <a href="#" className="btn btn-primary btn-square rounded-circle nav-fill me-3">
                  <i className="fab fa-facebook-f text-white" />
                </a>
                <a href="#" className="btn btn-primary btn-square rounded-circle nav-fill me-3">
                  <i className="fab fa-twitter text-white" />
                </a>
                <a href="#" className="btn btn-primary btn-square rounded-circle nav-fill me-3">
                  <i className="fab fa-instagram text-white" />
                </a>
                <a href="#" className="btn btn-primary btn-square rounded-circle nav-fill me-0">
                  <i className="fab fa-linkedin-in text-white" />
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
        />
        <div className="container px-0">
          <nav className="navbar navbar-expand-lg navbar-dark bg-white py-3 px-4">
            <Link to="/" className="navbar-brand p-0">
              <h1 className="text-primary m-0">
                <i className="fas fa-donate me-3" />
                Investa
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
                <Link to="/" className="nav-item nav-link">
                  Home
                </Link>
                <Link to="/about" className="nav-item nav-link">
                  About
                </Link>
                <Link to="/service" className="nav-item nav-link">
                  Service
                </Link>
                 <Link  to="/blog" className="nav-item nav-link ">Blog</Link>
                

                {/* <div className="nav-item dropdown">
                            <a
                              href="#"
                              className="nav-link dropdown-toggle"
                              data-bs-toggle="dropdown"
                            >
                              Pages
                            </a>
                            <div className="dropdown-menu m-0">
                              <Link to="/blog" className="dropdown-item">
                                Our Blog
                              </Link>
                              <Link to="/team" className="dropdown-item">
                                Our Team
                              </Link>
                              <Link to="/testimonial" className="dropdown-item">
                                Testimonial
                              </Link>
                              <Link to="/faqs" className="dropdown-item">
                                FAQs
                              </Link>
                              <Link to="/404" className="dropdown-item">
                                404 Page
                              </Link>
                            </div>
                          </div> */}
                <Link to="/contact" className="nav-item nav-link">
                  Contact
                </Link>
              </div>
              <div className="d-flex align-items-center flex-nowrap pt-xl-0">
                <button
                  className="btn btn-primary btn-md-square mx-2"
                  data-bs-toggle="modal"
                  data-bs-target="#searchModal"
                >
                  <i className="fas fa-search" />
                </button>
                <a
                  href="#"
                  className="btn btn-primary rounded-pill text-white py-2 px-4 ms-2 flex-wrap flex-sm-shrink-0"
                >
                  Start Investa
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar & Hero End */}

      {/* Header Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="bg-breadcrumb-single" />
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h4
            className="text-white display-4 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            Our Blogs
          </h4>
          <ol
            className="breadcrumb justify-content-center mb-0 wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            {/* <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li> */}
            <li className="breadcrumb-item active text-primary">Blog</li>
          </ol>
        </div>
      </div>
      {/* Header End */}

      {/* Blog Start */}
  <div className="container-fluid service py-5">
    <div className="container py-5">
      <div
        className="text-center mx-auto pb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 800 }}
      >
        <h4 className="text-primary">From Blog</h4>
        <h1 className="display-4">
          {" "}
    Salesforce News and Updates
        </h1>
      </div>
      <div className="row g-4 justify-content-center text-center">
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="service-item bg-light rounded">
            <div className="service-img">
             <img
                src="assets/img/blog-1.png"
                className="img-fluid w-100 rounded"
                alt="Image"
              />
              <div className='blog-categiry py-2 px-4'><span> salesforce </span></div>
            </div>
            <div className="service-content text-center p-4">
              <div className="service-content-inner">
                <a href="#" className="h4 mb-4 d-inline-flex text-start">
                  <i className="fas fa-donate fa-2x me-2" />How Lightning Web Components are Revolutionizing Salesforce Development
                </a>
                <p className="mb-4">
Explore the power of Lightning Web Components (LWC) and how they are transforming the way Salesforce developers create fast, efficient, 
and dynamic applications for businesses.
                </p>
                <a className="btn btn-light rounded-pill py-2 px-4" href="#">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div className="service-item bg-light rounded">
            <div className="service-img">
              <img
                src="assets/img/blog-2.png"
                className="img-fluid w-100 rounded"
                alt="Image"
              />
            </div>
            <div className="service-content text-center p-4">
              <div className="service-content-inner">
                <a href="#" className="h4 mb-4 d-inline-flex text-start">
                  <i className="fas fa-donate fa-2x me-2" />Apex Programming Best Practices for Salesforce Developers
                </a>
                <p className="mb-4">
         Learn the best practices when writing Apex code to ensure scalability, security, and maintainability 
         in your Salesforce development projects. Implementing these practices.
                </p>
                <a className="btn btn-light rounded-pill py-2 px-4" href="#">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <div className="service-item bg-light rounded">
            <div className="service-img">
              <img
               src="assets/img/blog-3.png"
                className="img-fluid w-100 rounded"
                alt="Image"
              />
            </div>
            <div className="service-content text-center p-4">
              <div className="service-content-inner">
                <a href="#" className="h4 mb-4 d-inline-flex text-start">
                  <i className="fas fa-donate fa-2x me-2" />The Importance of Salesforce Integration for Your Business Salesforce

                                
                </a>
                <p className="mb-4">
        Salesforce integration can take your business to the next level. Learn how connecting Salesforce with your existing systems 
        can enhance efficiency and data-driven decision-making. 
                   and reporting.
                </p>
                <a className="btn btn-light rounded-pill py-2 px-4" href="#">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Blog End */}
  {/* Footer Start */}
  <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="footer-item d-flex flex-column">
            <div className="footer-item">
              <h4 className="text-white mb-4">Websfdc</h4>
              <p className="mb-3">
                At Websfdc Technology, we specialize in Salesforce web development, offering innovative solutions to streamline business processes and enhance customer relationships. Your success is our priority.
              </p>
              <div className="position-relative mx-auto rounded-pill">
                <input
                  className="form-control rounded-pill w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Enter your email"
                />
                <button
                  type="button"
                  className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2"
                >
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="footer-item d-flex flex-column">
            <h4 className="text-white mb-4">Useful Links</h4>
            <a href="#">
              <i className="fas fa-angle-right me-2" /> About us
            </a>
            <a href="#">
              <i className="fas fa-angle-right me-2" /> Services
            </a>
            <a href="#">
              <i className="fas fa-angle-right me-2" /> Features
            </a>
            
            <a href="#">
              <i className="fas fa-angle-right me-2" /> FAQS
            </a>
            <a href="#">
              <i className="fas fa-angle-right me-2" /> Our blog
            </a>
            <a href="#">
              <i className="fas fa-angle-right me-2" /> Contact 
            </a>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="footer-item d-flex flex-column">
            <h4 className="text-white mb-4">Contact Info</h4>
            <a href="">
              <i className="fa fa-map-marker-alt me-2" /> 9th floor,Unit 60,Sushma infinium,Zirkpur,Chandigarh,Panjab,140603
            </a>
            <a href="">
              <i className="fas fa-envelope me-2" />info@websfdctech.co.in
            </a>
          
            <a href="">
              <i className="fas fa-phone me-2" /> +91 7015548507
            </a>
            <a href="" className="mb-3">
              <i className="fas fa-print me-2" /> +91 7015548507
            </a>
            <div className="d-flex align-items-center">
              <a className="btn btn-light btn-md-square me-2" href="">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-light btn-md-square me-2" href="">
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-light btn-md-square me-2" href="">
                <i className="fab fa-instagram" />
              </a>
              <a className="btn btn-light btn-md-square me-0" href="">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="footer-item-post d-flex flex-column">
            <h4 className="text-white mb-4">Popular Post</h4>
            <div className="d-flex flex-column mb-3">
              <p className="text-uppercase text-primary mb-2">Investment</p>
              <a href="#" className="text-body">
                Revisiting Your Investment &amp; Distribution Goals
              </a>
            </div>
            <div className="d-flex flex-column mb-3">
              <p className="text-uppercase text-primary mb-2">Business</p>
              <a href="#" className="text-body">
                Dimensional Fund Advisors Interview with Director
              </a>
            </div>
            <div className="footer-btn text-start">
              <a href="#" className="btn btn-light rounded-pill px-4">
                View All Post <i className="fa fa-arrow-right ms-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
    

      {/* Copyright Start */}
  <div className="container-fluid copyright py-4">
    <div className="container">
      <div className="row g-4 align-items-center">
        <div className="col-md-6 text-center text-md-start mb-md-0">
          <span className="text-body">
            <a href="#" className="border-bottom text-primary">
              <i className="fas fa-copyright text-light me-2" />
              ,All rights reserved.
            </a>
         Copyright 2025 Websfdc Technology
          </span>
        </div>
        <div className="col-md-6 text-center text-md-end text-body">
          {/*/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. *** /*/}
          {/*/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, *** /*/}
          {/*/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". *** /*/}
          {" "}
          <a
            className="border-bottom text-primary"
            href="https://htmlcodex.com"
          >
            
          </a>{" "}
          {" "}
          <a
            className="border-bottom text-primary"
            href="https://themewagon.com"
          >
          
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Copyright End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-primary btn-lg-square back-to-top">
    <i className="fa fa-arrow-up" />
  </a>
  {/* JavaScript Libraries */}
  {/* Template Javascript */}
</>

  );
};

export default Blog;