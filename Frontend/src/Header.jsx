import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link

const Header = () => {
  return (
    <>
      {/* Topbar Start */}
        <div className="container-fluid topbar px-0 d-none d-lg-block">
             <div className="container px-0">
               <div className="row gx-0 align-items-center" style={{ height: 45 }}>
                 <div className="col-lg-8 text-center text-lg-start mb-lg-0">
                   <div className="d-flex flex-wrap">
                    <a href="https://www.google.com/maps/place/Sushma+Infinium/@30.6387037,76.820771,17z/data=!4m6!3m5!1s0x390feb2b486ba04d:0x2555b85046f24e48!8m2!3d30.6387037!4d76.8233459!16s%2Fg%2F11c6dghxwk?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-muted me-4">
                      <i className="fas fa-map-marker-alt text-primary me-2" />Find A Location
                    </a>

                     <a href="#" className="text-muted me-4">
                       <i className="fas fa-phone-alt text-primary me-2" />
                       +91 7015548507
                     </a>
                     <a href="#" className="text-muted me-0">
                       <i className="fas fa-envelope text-primary me-2" />
                       info@websdfc.co.in
                     </a>
                   </div>
                 </div>
                 <div className="col-lg-4 text-center text-lg-end">
                  <div className="d-flex align-items-center justify-content-end">
                 <a
                   href="https://www.facebook.com/people/Websfdc-Technology-Pvt-Ltd/61580310165683/?rdid=x9m2lBpGoIlkwnIK&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CfpDtCw93%2F"target='_blank'
                   className="btn btn-primary btn-square rounded-circle nav-fill me-3"
                 >
                   <i className="fab fa-facebook-f text-white" />
                 </a>
                 <a
                   href="https://x.com/websfdc_tech?t=MjGQegl9BVB7bidFXkvptA&s=09"target='_blank'
                   className="btn btn-primary btn-square rounded-circle nav-fill me-3"
                 >
                   <i className="fab fa-twitter text-white" />
                 </a>
                 <a
                   href="https://www.instagram.com/websfdc_technology/?igsh=aHVvMmJicHpkd2Jq#"target='_blank'
                   className="btn btn-primary btn-square rounded-circle nav-fill me-3"
                 >
                   <i className="fab fa-instagram text-white" />
                 </a>
                 <a
                   href="https://www.linkedin.com/company/websfdc/posts/?feedView=all"target='_blank'
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
                     <Link to="/" className="nav-item nav-link active">Home</Link>
                     <Link to="/about" className="nav-item nav-link active">About</Link>
                     <Link to="/service" className="nav-item nav-link active">Service</Link>
                     <Link to="/blog" className="nav-item nav-link active">Blog</Link>
                     <Link to="/contact" className="nav-item nav-link active">Contact</Link>
                   </div>
                   
                 </div>
               </nav>
             </div>
           </div>
    </>
  );
};

export default Header;