import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* Footer Main Section */}
      <div
        className="container-fluid footer py-5 wow fadeIn"
        data-wow-delay="0.2s"
      >
        <div className="container py-5">
          <div className="row g-5">
            {/* Newsletter */}
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Newsletter</h4>
                <p className="mb-3">
                  Stay updated with the latest news and offers from Websfdc
                  Technology. Subscribe to our newsletter for insights on
                  Salesforce web development, product updates, and more.
                </p>
              </div>
            </div>

            {/* Explore Links */}
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Explore</h4>
                <nav aria-label="Footer navigation">
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/" className="text-white text-decoration-none">
                        <i className="fas fa-angle-right me-2" /> Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about"
                        className="text-white text-decoration-none"
                      >
                        <i className="fas fa-angle-right me-2" /> About
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/service"
                        className="text-white text-decoration-none"
                      >
                        <i className="fas fa-angle-right me-2" /> Service
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog"
                        className="text-white text-decoration-none"
                      >
                        <i className="fas fa-angle-right me-2" /> Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        className="text-white text-decoration-none"
                      >
                        <i className="fas fa-angle-right me-2" /> Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Contact Info</h4>
                <p className="text-white mb-2">
                  <i className="fa fa-map-marker-alt me-2" />
                  9th floor, Unit 60, Sushma Infinium, Zirakpur, Chandigarh,
                  Punjab, 140603
                </p>
                <p className="text-white mb-2">
                  <i className="fas fa-envelope me-2" />
                  info@websfdctech.co.in
                </p>
                <p className="text-white mb-0">
                  <i className="fas fa-phone me-2" /> +91 7015548507
                </p>

                {/* Social Media */}
                <div className="d-flex align-items-center mt-3">
                  <a
                    className="btn btn-light btn-md-square me-2"
                    href="https://www.facebook.com/people/Websfdc-Technology-Pvt-Ltd/61580310165683/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-light btn-md-square me-2"
                    href="https://x.com/websfdc_tech?t=MjGQegl9BVB7bidFXkvptA&s=09"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-light btn-md-square me-2"
                    href="https://www.instagram.com/websfdc_technology/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                  <a
                    className="btn btn-light btn-md-square me-0"
                    href="https://www.linkedin.com/company/websfdc/posts/?feedView=all"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>

            {/* Popular Post */}
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

      {/* Back to Top */}
      <a href="#" className="btn btn-primary btn-lg-square back-to-top">
        <i className="fa fa-arrow-up" />
      </a>
    </>
  );
};

export default Footer;
