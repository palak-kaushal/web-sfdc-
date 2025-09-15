import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
    


      {/* Blog Start */}
  <div className="container-fluid service py-5">
    <div className="container py-5">
      <div
        className="text-center mx-auto pb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 800 }}
      >
        <h1 className="text-primary">Blog</h1>
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