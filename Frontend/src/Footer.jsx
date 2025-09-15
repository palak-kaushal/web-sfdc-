import React from "react";
import { Link } from "react-router-dom"; 

const Footer = () => {
  return (
    <>
     <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="footer-item d-flex flex-column">
            <div className="footer-item">
              <h4 className="text-white mb-4">Newsletter</h4>
              <p className="mb-3">
              Stay updated with the latest news and offers from Websfdc Technology. 
              Subscribe to our newsletter for insights on Salesforce web development, 
              product updates, and more.
              </p>
              {/* <div className="position-relative mx-auto rounded-pill">
                <input
                  className="form-control rounded-pill w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Enter your email"
                /> */}
                {/* <button
                  type="button"
                  className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2"
                >
                  SignUp
                </button> */}
              {/* </div> */}
            </div>
          </div>
        </div>
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
          <Link to="/about" className="text-white text-decoration-none">
            <i className="fas fa-angle-right me-2" /> About
          </Link>
        </li>
        <li>
          <Link to="/service" className="text-white text-decoration-none">
            <i className="fas fa-angle-right me-2" /> Service
          </Link>
        </li>
        <li>
          <Link to="/blog" className="text-white text-decoration-none">
            <i className="fas fa-angle-right me-2" /> Blog
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-white text-decoration-none">
            <i className="fas fa-angle-right me-2" /> Contact
          </Link>
        </li>
      </ul>
    </nav>
  </div>
</div>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="footer-item d-flex flex-column">
            <h4 className="text-white mb-4">Contact Info</h4>
            <a href="">
              <i className="fa fa-map-marker-alt me-2" /> 9th floor, Unit 60, Sushma Infinium, Zirakpur,Chandigarh Punjab,140603
                                                    
            </a>
            <a href="">
              <i className="fas fa-envelope me-2" /> info@example.com
            </a>
    
            <a href="">
              <i className="fas fa-phone me-2" /> +91 7015548507
            </a>
            <div className="d-flex align-items-center">
              <a className="btn btn-light btn-md-square me-2" href="https://www.facebook.com/people/Websfdc-Technology-Pvt-Ltd/61580310165683/?rdid=x9m2lBpGoIlkwnIK&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CfpDtCw93%2F" target='_blank'>
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-light btn-md-square me-2" href="https://x.com/websfdc_tech?t=MjGQegl9BVB7bidFXkvptA&s=09"target='_blank'>
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-light btn-md-square me-2" href="https://www.instagram.com/websfdc_technology/?igsh=aHVvMmJicHpkd2Jq#"target='_blank'>
                <i className="fab fa-instagram" />
              </a>
              <a className="btn btn-light btn-md-square me-0" href="https://www.linkedin.com/company/websfdc/posts/?feedView=all"target='_blank'>
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
   <a href="#" className="btn btn-primary btn-lg-square back-to-top">
    <i className="fa fa-arrow-up" />
  </a>
    </>
  );
};

export default Footer;