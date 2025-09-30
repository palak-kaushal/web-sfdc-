import React, { useState } from "react";

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare message for admin
    const adminMessage = `New Contact Form Submission:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Project: ${formData.project}
Subject: ${formData.subject}
Message: ${formData.message}`;

    const adminNumber = "7876657938"; // Admin WhatsApp number
    window.open(
      `https://wa.me/${adminNumber}?text=${encodeURIComponent(adminMessage)}`,
      "_blank"
    );

    // Prepare message for user (if phone provided)
    if (formData.phone) {
      const userNumber = `91${formData.phone}`; // User's phone with country code
      const userMessage = `Hi ${formData.name}, thanks for contacting us! We will get back to you shortly.`;
      window.open(
        `https://wa.me/${userNumber}?text=${encodeURIComponent(userMessage)}`,
        "_blank"
      );
    }

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      project: "",
      subject: "",
      message: "",
    });

    alert(
      "✅ WhatsApp message opened for admin and user (click send to actually send)."
    );
  };

  return (
    <>
      {/* Contact Section */}
      <div className="container-fluid contact bg-light py-5">
        <div className="container py-5">
          <div className="row g-5">
            {/* Intro Section */}
            <div className="col-lg-6">
              <div className="contact-item pb-5">
                <h4 className="text-primary">Contact Us</h4>
                <h1 className="display-4 mb-4">Get In Touch With Us</h1>
                <p className="mb-0">
                  Fill out the form and we’ll get back to you as soon as possible.
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
                    <button type="submit" className="btn btn-success w-100 py-3">
                      <i className="fab fa-whatsapp me-2"></i> Send Message via WhatsApp
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