import React from "react";

const ContactPage = () => {
  return (
    <div className="container-fluid contact py-5">
      <div className="container py-5">
        <div className="p-5 bg-light rounded">
          <div className="row g-4">
            <div className="col-12">
              <div className="text-center mx-auto" style={{ maxWidth: "700px" }}>
                <h1 className="text-primary">Get in touch</h1>
                <p className="mb-4">
                  We’d love to hear from you! Have a question about our fresh produce,
                  an order, or anything else? Send us a message and our friendly team
                  will get back to you as soon as possible.
                </p>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="h-100 rounded">
                <iframe
                  className="rounded w-100"
                  style={{ height: "400px" }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>
            </div>

            <div className="col-lg-7">
              <form>
                <input
                  type="text"
                  className="w-100 form-control border-0 py-3 mb-4"
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  className="w-100 form-control border-0 py-3 mb-4"
                  placeholder="Enter Your Email"
                />
                <textarea
                  className="w-100 form-control border-0 mb-4"
                  rows="5"
                  cols="10"
                  placeholder="Your Message"
                ></textarea>
                <button
                  className="w-100 btn form-control border-secondary py-3 bg-white text-primary"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>

            <div className="col-lg-5">
              <div className="d-flex p-4 rounded mb-4 bg-white">
                <i className="fas fa-map-marker-alt fa-2x text-primary me-4"></i>
                <div>
                  <h4>Address</h4>
                  <p className="mb-2">City of Naga, Cebu</p>
                </div>
              </div>
              <div className="d-flex p-4 rounded mb-4 bg-white">
                <i className="fas fa-envelope fa-2x text-primary me-4"></i>
                <div>
                  <h4>Mail Us</h4>
                  <p className="mb-2">FruityPop@gmail.com</p>
                </div>
              </div>
              <div className="d-flex p-4 rounded bg-white">
                <i className="fa fa-phone-alt fa-2x text-primary me-4"></i>
                <div>
                  <h4>Telephone</h4>
                  <p className="mb-2">09109442513</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
