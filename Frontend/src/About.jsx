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
          <h1 className="text-primary">About</h1>
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