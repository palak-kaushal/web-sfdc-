import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
        <>
  {/* Spinner Start */}
  {/* <div
    id="spinner"
    className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
  >
    <div
      className="spinner-border text-primary"
      style={{ width: "3rem", height: "3rem" }}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  </div> */}
  {/* Spinner End */}
  {/* Topbar Start */}
  <div className="container-fluid topbar px-0 d-none d-lg-block">
    <div className="container px-0">
      <div className="row gx-0 align-items-center" style={{ height: 45 }}>
        <div className="col-lg-8 text-center text-lg-start mb-lg-0">
          <div className="d-flex flex-wrap">
            <a href="#" className="text-muted me-4">
              <i className="fas fa-map-marker-alt text-primary me-2" />
              Find a location
            </a>
            <a href="#" className="text-muted me-4">
              <i className="fas fa-phone-alt text-primary me-2" />
              +91 7015548507
            </a>
            <a href="#" className="text-muted me-0">
              <i className="fas fa-envelope text-primary me-2" />
              info@websfdctech.co.in
            </a>
          </div>
        </div>
        <div className="col-lg-4 text-center text-lg-end">
          <div className="d-flex align-items-center justify-content-end">
            <a
              href="#"
              className="btn btn-primary btn-square rounded-circle nav-fill me-3"
            >
              <i className="fab fa-facebook-f text-white" />
            </a>
            <a
              href="#"
              className="btn btn-primary btn-square rounded-circle nav-fill me-3"
            >
              <i className="fab fa-twitter text-white" />
            </a>
            <a
              href="#"
              className="btn btn-primary btn-square rounded-circle nav-fill me-3"
            >
              <i className="fab fa-instagram text-white" />
            </a>
            <a
              href="#"
              className="btn btn-primary btn-square rounded-circle nav-fill me-0"
            >
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
    ></div>
    <div className="container px-0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-white py-3 px-4">
        <a href="index.html" className="navbar-brand p-0">
          <h1 className="text-primary m-0">
            <i className="fas fa-donate me-3" />
          Websfdc
          </h1>
          {/* <assets/img src="img/logo.png" alt="Logo"> */}
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
            {/* <a href="index.html" className="nav-item nav-link active">
              Home
            </a> */}
            <Link  to="/" className="nav-item nav-link ">Home</Link>
            {/* <a href="about.html" className="nav-item nav-link ">
              About
            </a> */}
              <Link  to="/about" className="nav-item nav-link active ">About</Link>
            {/* <a href="service.html" className="nav-item nav-link">
              Services
            </a> */}
              <Link  to="/service" className="nav-item nav-link ">Service</Link>
            {/* <a href="project.html" className="nav-item nav-link">
              Projects
            </a>   */}
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
                <a href="blog.html" className="dropdown-item">
                  Our Blog
                </a>
                <a href="team.html" className="dropdown-item">
                  Our Team
                </a>
                <a href="testimonial.html" className="dropdown-item">
                  Testimonial
                </a>
                <a href="faqs.html" className="dropdown-item">
                  FAQs
                </a>
                <a href="404.html" className="dropdown-item">
                  404 Page
                </a>
              </div>
            </div> */}
            {/* <a href="contact.html" className="nav-item nav-link">
              Contact
            </a> */}
              <Link  to="/contact" className="nav-item nav-link">Contact</Link>
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
              Start Websfdc
            </a>
          </div>
        </div>
      </nav>
    </div>
  </div>
  {/* Navbar & Hero End */}
  {/* Modal Search Start */}
  <div
    className="modal fade"
    id="searchModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-fullscreen">
      <div className="modal-content rounded-0">
        <div className="modal-header">
          <h4 className="modal-title mb-0" id="exampleModalLabel">
            Search by keyword
          </h4>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body d-flex align-items-center">
          <div className="input-group w-75 mx-auto d-flex">
            <input
              type="search"
              className="form-control p-3"
              placeholder="keywords"
              aria-describedby="search-icon-1"
            />
            <span id="search-icon-1" className="input-group-text p-3">
              <i className="fa fa-search" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Modal Search End */}
  {/* Header Start */}
  <div className="container-fluid bg-breadcrumb">
    <div className="bg-breadcrumb-single" />
    <div className="container text-center py-5" style={{ maxWidth: 900 }}>
      <h4
        className="text-white display-4 mb-4 wow fadeInDown"
        data-wow-delay="0.1s"
      >
        About Us
      </h4>
      <ol
        className="breadcrumb justify-content-center mb-0 wow fadeInDown"
        data-wow-delay="0.3s"
      >
        <li className="breadcrumb-item">
          <a href="index.html">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Pages</a>
        </li>
        <li className="breadcrumb-item active text-primary">About</li>
      </ol>
    </div>
  </div>
  {/* Header End */}
  {/* About Start */}
  <div className="container-fluid about bg-light py-5">
    <div className="container py-5">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6 col-xl-5 wow fadeInLeft" data-wow-delay="0.1s">
          <div className="about-img">
            <img
              src="assets/img/about-3.png"
              className="img-fluid w-100 rounded-top bg-white"
              alt="Image"
            />
            <img
              src="assets/img/about-2.png"
              className="img-fluid w-100 rounded-bottom"
              alt="Image"
            />
          </div>
        </div>
        <div
          className="col-lg-6 col-xl-7 wow fadeInRight"
          data-wow-delay="0.3s"
        >
          <h4 className="text-primary">About Our Company</h4>
          <h1 className="display-5 mb-4">
            Expert Salesforce Development & Consulting
          </h1>
          <p className="text ps-4 mb-4">
            At WebSFDC Technology, we specialize in providing customized Salesforce solutions to help businesses automate, integrate, and optimize their operations. Our team of expert Salesforce developers ensures top-tier solutions tailored to your specific needs, whether you're just getting started with Salesforce or need advanced customization.

As a leading Salesforce consultant, we guide you through every step of your Salesforce journey, from setup and development to ongoing support and maintenance.

We deliver high-quality, scalable Salesforce solutions.

Expert Salesforce customization and integration services.

Reliable Salesforce support and optimization.


          </p>
          <div className="row g-4 justify-content-between mb-5">
            <div className="col-lg-6 col-xl-5">
              <p className="text-dark">
                <i className="fas fa-check-circle text-primary me-1" /> 129 +
Salesforce Projects Completed
              </p>
              <p className="text-dark mb-0">
                <i className="fas fa-check-circle text-primary me-1" /> 99 +
Awards & Recognitions
                
              </p>
            </div>
            <div className="col-lg-6 col-xl-7">
              <p className="text-dark">
                <i className="fas fa-check-circle text-primary me-1" />{" "}
               556 +
Certified Salesforce Experts
              </p>
              <p className="text-dark mb-0">
                <i className="fas fa-check-circle text-primary me-1" />{" "}
               967 +
Happy Clients Worldwide
              </p>
            </div>
          </div>
          <div className="row g-4 justify-content-between mb-5">
            <div className="col-xl-5">
              <a href="#" className="btn btn-primary rounded-pill py-3 px-5">
                Learn More
              </a>
            </div>
            <div className="col-xl-7 mb-5">
              <div className="about-customer d-flex position-relative">
                <img
                  src="assets/img/customer-img-1.jpg"
                  className="img-fluid btn-xl-square position-absolute"
                  style={{ left: 0, top: 0 }}
                  alt="Image"
                />
                <img
                  src="assets/img/customer-img-2.jpg"
                  className="img-fluid btn-xl-square position-absolute"
                  style={{ left: 45, top: 0 }}
                  alt="Image"
                />
                <img
                  src="assets/img/customer-img-3.jpg"
                  className="img-fluid btn-xl-square position-absolute"
                  style={{ left: 90, top: 0 }}
                  alt="Image"
                />
                <img
                  src="assets/img/customer-img-1.jpg"
                  className="img-fluid btn-xl-square position-absolute"
                  style={{ left: 135, top: 0 }}
                  alt="Image"
                />
                <div
                  className="position-absolute text-dark"
                  style={{ left: 220, top: 10 }}
                >
                  <p className="mb-0">5m+ Trusted</p>
                  <p className="mb-0">Global Customers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4 text-center align-items-center justify-content-center">
            <div className="col-sm-4">
              <div className="bg-primary rounded p-4">
                <div className="d-flex align-items-center justify-content-center">
                  <span
                    className="counter-value fs-1 fw-bold text-dark"
                    data-toggle="counter-up"
                  >
                    129
                  </span>
                  <h4
                    className="text-dark fs-1 mb-0"
                    style={{ fontWeight: 600, fontSize: 25 }}
                  >
                    +
                  </h4>
                </div>
                <div className="w-100 d-flex align-items-center justify-content-center">
                  <p className="text-white mb-0">Salesforce Projects Completed</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="bg-dark rounded p-4">
                <div className="d-flex align-items-center justify-content-center">
                  <span
                    className="counter-value fs-1 fw-bold text-white"
                    data-toggle="counter-up"
                  >
                    99
                  </span>
                  <h4
                    className="text-white fs-1 mb-0"
                    style={{ fontWeight: 600, fontSize: 25 }}
                  >
                    +
                  </h4>
                </div>
                <div className="w-100 d-flex align-items-center justify-content-center">
                  <p className="mb-0">Awards & Recognitions</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="bg-primary rounded p-4">
                <div className="d-flex align-items-center justify-content-center">
                  <span
                    className="counter-value fs-1 fw-bold text-dark"
                    data-toggle="counter-up"
                  >
                  556
                  </span>
                  <h4
                    className="text-dark fs-1 mb-0"
                    style={{ fontWeight: 600, fontSize: 25 }}
                  >
                    +
                  </h4>
                </div>
                <div className="w-100 d-flex align-items-center justify-content-center">
                  <p className="text-white mb-0">Certified Salesforce Experts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* FAQ Start */}
  <div className="container-fluid faq py-5">
    <div className="container py-5">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
          <div className="pb-5">
            <h4 className="text-primary">FAQs</h4>Some Important FAQ's
Common Frequently Asked Questions
            <h1 className="display-4"></h1>
          </div>
          <div className="accordion bg-light rounded p-4" id="accordionExample">
            <div className="accordion-item border-0 mb-4">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button text-dark fs-5 fw-bold rounded-top"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseTOne"
                >
                  What is SalesForce?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body my-2">
                  <h5></h5>
                  <p>
                    Salesforce development involves customizing the Salesforce platform through coding (Apex) and building dynamic applications using Lightning Web Components (LWC) to cater to the specific needs of your business. It helps optimize sales, service, and marketing operations with tailored features.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item border-0 mb-4">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed text-dark fs-5 fw-bold rounded-top"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  What is the difference between salesforce admin and salesforce developer?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body my-2">
                  
                  <p>
                    Salesforce Admin focuses on managing and configuring the Salesforce environment, such as user permissions, data management, and reporting. A Salesforce Developer, on the other hand, writes code, customizes the platform, and builds custom applications using Apex and LWC to extend Salesforce functionality.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item border-0 mb-4">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed text-dark fs-5 fw-bold rounded-top"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                How can salesforce help my business?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body my-2">

                  <p>
                    Salesforce provides a unified platform for managing sales, customer service, marketing, and analytics. It helps businesses streamline processes, gain valuable insights into customer data, and automate tasks, leading to better efficiency, productivity, and customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item border-0 mb-0">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed text-dark fs-5 fw-bold rounded-top"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                   What is lightning web componentes?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body my-2">
                 
                  <p>
                    Lightning Web Components (LWC) is a programming model for building fast and modern web applications on the Salesforce platform. It allows developers to create reusable, lightweight components with improved performance and enhanced user experiences, fully leveraging the latest web standards.

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
          <div className="faq-img RotateMoveRight rounded">
            <img
              src="assets/img/faq-img.png"
              className="img-fluid rounded w-100"
              alt="Image"
            />
            <a
              className="faq-btn btn btn-primary rounded-pill text-white py-3 px-5"
              href="#"
            >
              Read More Q &amp; A <i className="fas fa-arrow-right ms-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* FAQ End */}
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

    </div>
  )
}

export default About