import React from 'react'
import { Link } from 'react-router-dom'
const Service = () => {
  return (
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
            <i className="fas fa-cloud-sun me-3" />
            Websdfc
          </h1>
          {/* <img src="assets/img/logo.png" alt="Logo"> */}
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
            {/* <a href="about.html" className="nav-item nav-link">
              About
            </a> */}
              <Link  to="/about" className="nav-item nav-link ">About</Link>
            {/* <a href="service.html" className="nav-item nav-link">
              Services
            </a> */}
              <Link  to="/service" className="nav-item nav-link active ">Service</Link>
              <Link  to="/blog" className="nav-item nav-link active ">Blog</Link>
            


            {/* <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu m-0"> */}
                {/* <a href="blog.html" className="dropdown-item">
                  Our Blog
                </a> */}
                 {/* <Link  to="/blog" className="dropdown-item  ">Our Blog</Link> */}

                {/* <a href="team.html" className="dropdown-item">
                  Our Team
                </a> */}
                {/* <Link  to="/team" className="dropdown-item  ">Our Team</Link> */}
                {/* <a href="testimonial.html" className="dropdown-item">
                  Testimonial
                </a> */}
                {/* <Link  to="/testimonial" className="dropdown-item  ">Our </Link> */}
                {/* <a href="faqs.html" className="dropdown-item">
                  FAQs
                </a> */}
                {/* <Link  to="/404" className="dropdown-item  ">Our Blog</Link> */}
                {/* <a href="404.html" className="dropdown-item">
                  404 Page
                </a> */}
                {/* <Link  to="/blog" className="dropdown-item  ">Our Blog</Link> */}
              {/* </div>
            </div> */}
            {/* <a href="contact.html" className="nav-item nav-link">
              Contact
            </a> */}
              <Link  to="/contact" className="nav-item nav-link ">Contact</Link>
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
              Start Websdfc
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
        Our Services
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
        <li className="breadcrumb-item active text-primary">Service</li>
      </ol>
    </div>
  </div>
  {/* Header End */}
  {/* Services Start */}
  <div className="container-fluid service py-5">
    <div className="container py-5">
      <div
        className="text-center mx-auto pb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 800 }}
      >
        <h4 className="text-primary">Our Services</h4>
        <h1 className="display-4">
          {" "}
          We Provide Expert Salesforce & Web Development Services
        </h1>
        <p> At WebSFDC Technology, we specialize in Salesforce development, Lightning WEb Components (LWC), and custom web development solutions enhance their oeprations and online presence.</p>
      </div>
      <div className="row g-4 justify-content-center text-center">
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="service-item bg-light rounded">
            <div className="service-img">
              <img
                src="assets/img/service-1.png"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div className="service-content text-center p-4">
              <div className="service-content-inner">
                <a href="#" className="h4 mb-4 d-inline-flex text-start">
                  <i className="fas fa-donate fa-2x me-2" /> Salesforce Development
                </a>
                <p className="mb-4">
                 We offer Salesforce development services including custom applications, integrations, and automations to boost your business performance.
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
                src="assets/img/service-2.png"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div className="service-content text-center p-4">
              <div className="service-content-inner">
                <a href="#" className="h4 mb-4 d-inline-flex text-start">
                  <i className="fas fa-donate fa-2x me-2" /> Lightning Web Development(LWC)
                </a>
                <p className="mb-4">
                  Our expert specialize in building dynamic and responsive Lightning Web Comoponents (LWC) to deliver modern and efficent Salesforce solutions.
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
                src="assets/img/service-3.png"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div className="service-content text-center p-4">
              <div className="service-content-inner">
                <a href="#" className="h4 mb-4 d-inline-flex text-start">
                  <i className="fas fa-donate fa-2x me-2" /> Salesforce Admin Services
                </a>
                <p className="mb-4">
                 Our Salesforce admin services help businesses manage their Salesforce enviroments efficiently, from user setup and security to data management and reporting.
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
          data-wow-delay="0.7s"
        >
          <div className="service-item bg-light rounded">
            <div className="service-img">
              <img
                src="assets/img/service-4.png"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div className="service-content text-center p-4">
              <div className="service-content-inner">
                <a href="#" className="h4 mb-4 d-inline-flex text-start">
                  <i className="fas fa-donate fa-2x me-2" /> Web Design & Development
                </a>
                <p className="mb-4">
                  We provide custom web design and development services to create visually stunning and user-friendly websites that elevate your brand's online presence.
                </p>
                <a className="btn btn-light rounded-pill py-2 px-4" href="#">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <a
            className="btn btn-primary rounded-pill py-3 px-5 wow fadeInUp"
            data-wow-delay="0.1s"
            href="#"
          >
            More Services
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Services End */}
{/* Testimonial Start */}
<div className="container-fluid bg-white py-5">
  <div className="container text-center">

    {/* Heading */}
    <h4 className="text-primary fw-bold">Testimonial</h4>
    <h2 className="fw-bold display-5 mb-3">
      What Our Customers Are Saying About <br /> Websfdc Technology
    </h2>
    <p className="text-muted mb-5">
      At Websfdc Technology, we take pride in delivering top-notch Salesforce web development solutions. 
      Here’s what our satisfied clients have to say about working with us:
    </p>

    {/* Testimonials with Arrows */}
    <div className="d-flex justify-content-between align-items-center">


      {/* Testimonial Cards */}
      <div className="d-flex flex-wrap justify-content-center gap-4">

        {/* Card 1 */}
        <div className="card shadow-sm border-0 p-3" style={{ maxWidth: "420px" }}>
          <div className="d-flex align-items-start">
            <img 
              src="assets/img/testimonial-2.png" 
              className="rounded" 
              style={{ width: "100px", height: "100px", objectFit: "cover" }} 
              alt="Michael Brown" 
            />
            <div className="ms-3">
              <h5 className="mb-1">Michael Brown</h5>
              <p className="text-muted mb-1">Salesforce Administrator</p>
              <div className="text-warning mb-2">
                ★★★★☆
              </div>
            </div>
          </div>
          <p className="text-muted mt-3 mb-0">
            "The team at Websfdc Technology helped us streamline our processes and integrate Salesforce seamlessly. 
            Their expertise and support made a huge difference in our operations!"
          </p>
        </div>
{/* card 2 */}
 <div className="card shadow-sm border-0 p-3" style={{ maxWidth: "420px" }}>
          <div className="d-flex align-items-start">
            <img 
              src="assets/img/testimonial-3.png" 
              className="rounded" 
              style={{ width: "100px", height: "100px", objectFit: "cover" }} 
              alt="Michael Brown" 
            />
            <div className="ms-3">
              <h5 className="mb-1">Sarah Williams</h5>
              <p className="text-muted mb-1">Salesforce Project Manager</p>
              <div className="text-warning mb-2">
                ★★★★☆
              </div>
            </div>
          </div>
          <p className="text-muted mt-3 mb-0">
           "Websfdc Technology completely transformed our Salesforce platform!
            Their team provided exceptional web development services, delivering 
            a highly customized solution that exceeded our expectations."
          </p>
        </div>
        {/* Card 3 */}
        <div className="card shadow-sm border-0 p-3" style={{ maxWidth: "420px" }}>
          <div className="d-flex align-items-start">
            <img 
              src="assets/img/testimonial-1.png" 
              className="rounded" 
              style={{ width: "100px", height: "100px", objectFit: "cover" }} 
              alt="Jessica Davis" 
            />
            <div className="ms-3">
              <h5 className="mb-1">Jessica Davis</h5>
              <p className="text-muted mb-1">Salesforce Consultant</p>
              <div className="text-warning mb-2">
                ★★★★☆
              </div>
            </div>
          </div>
          <p className="text-muted mt-3 mb-0">
            "I couldn't be more satisfied with Websfdc Technology’s work. 
            They crafted an efficient and user-friendly Salesforce web platform 
            that made a significant impact on our productivity!"
          </p>
        </div>

      </div>
    </div>
  </div>
</div>
{/* Testimonial End */}
 {/* Footer Start */}
  <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="footer-item d-flex flex-column">
            <div className="footer-item">
              <h4 className="text-white mb-4">Newsletter</h4>
              <p className="mb-3">
               At Websfdc Technology, we specialize in Salesforce web development, offering innovative solutions to streamline business processes and enhance customer relationships. Your success is our priority.
              </p>
             
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="footer-item d-flex flex-column">
            <h4 className="text-white mb-4">Use Links</h4>
           
            <a href="#">
              <i className="fas fa-angle-right me-2" /> About Us
            </a>
            <a href="#">
              <i className="fas fa-angle-right me-2" /> Features
            </a>
            <a href="#">
              <i className="fas fa-angle-right me-2" /> Services
            </a>
            <a href="#">
              <i className="fas fa-angle-right me-2" /> FAQ's
            </a>
            <a href="#">
              <i className="fas fa-angle-right me-2" /> Blogs
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
              <i className="fa fa-map-marker-alt me-2" /> 9th floor, Unit 60, Sushma Infinium, Zirakpur,Chandigarh Punjab,140603
              
            </a>
            
            <a href="">
              <i className="fas fa-envelope me-2" /> info@websfdctech.co.in
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
              Your Site Name
            </a>
            , All right reserved.
          </span>
        </div>
        <div className="col-md-6 text-center text-md-end text-body">
          {/*/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. *** /*/}
          {/*/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, *** /*/}
          {/*/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". *** /*/}
          Designed By{" "}
          <a
            className="border-bottom text-primary"
            href="https://htmlcodex.com"
          >
            HTML Codex
          </a>{" "}
          Distributed By{" "}
          <a
            className="border-bottom text-primary"
            href="https://themewagon.com"
          >
            ThemeWagon
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

  )
}

export default Service