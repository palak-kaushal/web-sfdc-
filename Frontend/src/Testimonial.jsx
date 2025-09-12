import React from "react";
import { Link } from "react-router-dom";

function Testimonial() {
  return (
    <>
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
      <div className="container-fluid bg-breadcrumb">
        <div className="bg-breadcrumb-single" />
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h4 className="text-white display-4 mb-4">Testimonial</h4>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">Pages</li>
            <li className="breadcrumb-item active text-primary">Testimonial</li>
          </ol>
        </div>
      </div>

      <div className="container-fluid testimonial bg-light py-5">
        <div className="container py-5">
          <div className="row g-4 align-items-center">
            <div className="col-xl-4">
              <div className="h-100 rounded">
                <h4 className="text-primary">Our Feedbacks</h4>
                <h1 className="display-4 mb-4">Clients are Talking</h1>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Harum atque soluta unde itaque. Consequatur quam odit
                  blanditiis harum veritatis porro.
                </p>
                <button className="btn btn-primary rounded-pill text-white py-3 px-5">
                  Read All Reviews <i className="fas fa-arrow-right ms-2" />
                </button>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="row g-4">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="col-md-6">
                    <div className="testimonial-item bg-white rounded p-4">
                      <div className="d-flex">
                        <i className="fas fa-quote-left fa-3x text-dark me-3" />
                        <p className="mt-4">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Magnam eos impedit eveniet dolorem culpa ullam.
                        </p>
                      </div>
                      <div className="d-flex justify-content-end">
                        <div className="my-auto text-end">
                          <h5>Person {num}</h5>
                          <p className="mb-0">Profession</p>
                        </div>
                        <div className="bg-white rounded-circle ms-3">
                          <img
                            src={`/assets/img/testimonial-${num}.jpg`} // ✅ Correct path
                            className="rounded-circle p-2"
                            style={{
                              width: 80,
                              height: 80,
                              border: "1px solid var(--bs-primary)",
                            }}
                            alt={`testimonial ${num}`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    
      <div className="container-fluid footer py-5">
        <div className="container py-5">
          <div className="row g-5">
            
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item">
                <h4 className="text-white mb-4">Newsletter</h4>
                <p className="mb-3">
                  Dolor amet sit justo amet elitr clita ipsum elitr est.
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
                    SignUp
                  </button>
                </div>
              </div>
            </div>

          
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item">
                <h4 className="text-white mb-4">Explore</h4>
                <Link to="/">Home</Link>
                <Link to="/service">Services</Link>
                <Link to="/about">About Us</Link>
                <Link to="/project">Latest Projects</Link>
                <Link to="/testimonial">Testimonial</Link>
                <Link to="/team">Our Team</Link>
                <Link to="/contact">Contact Us</Link>
              </div>
            </div>

    
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item">
                <h4 className="text-white mb-4">Contact Info</h4>
                <p>123 Street, New York, USA</p>
                <p>info@example.com</p>
                <p>+012 345 67890</p>
              </div>
            </div>

            
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item">
                <h4 className="text-white mb-4">Popular Post</h4>
                <p className="text-uppercase text-primary mb-2">Investment</p>
                <Link to="/">Revisiting Your Investment Goals</Link>
                <p className="text-uppercase text-primary mt-3 mb-2">Business</p>
                <Link to="/">Dimensional Fund Advisors Interview</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Testimonial;
