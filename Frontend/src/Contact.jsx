import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
 
      await axios.post("http://localhost:5000/api/createcontact", formData);
      alert("✅ Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        project: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("AxiosError:", error);
      alert("❌ Failed to send message. Please try again.");
    }
  };

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
                <i className="fas fa-cloud-sun me-3" />
                Websfdc
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
                  <Link  to="/contact" className="nav-item nav-link active">Contact</Link>
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
      {/* Header Section */}
      <div className="container-fluid bg-breadcrumb">
        <div className="bg-breadcrumb-single" />
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h4 className="text-white display-4 mb-4">Contact Us</h4>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            {/* <li className="breadcrumb-item">Pages</li> */}
            <li className="breadcrumb-item active text-primary">Contact</li>
          </ol>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container-fluid contact bg-light py-5">
        <div className="container py-5">
          <div className="row g-5">
            {/* Intro Section */}
            <div className="col-lg-6">
              <div className="contact-item pb-5">
                <h4 className="text-primary">Contact Us</h4>
                <h1 className="display-4 mb-4">If you have any comments, feel free to reach out to Websfdc Tech</h1>
                <p className="mb-0">
                The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code, and you're done. Download Now.  
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-6">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-lg-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      <label htmlFor="phone">Your Phone</label>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="project"
                        placeholder="Project"
                        value={formData.project}
                        onChange={handleChange}
                      />
                      <label htmlFor="project">Your Project</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: 160 }}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100 py-3">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Map Section */}
            <div className="col-12">
              <iframe
                className="rounded-top w-100"
                style={{ height: 400 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Contact;