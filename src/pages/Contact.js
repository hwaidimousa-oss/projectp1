
import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    alert("Thank you! Your message has been submitted.");

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section className="container py-5">

      <div className="text-center mb-5">
        <p className="section-label">
          GET IN TOUCH
        </p>

        <h1 className="fw-bold">
          Contact Us
        </h1>

        <p className="text-secondary">
          Have a question about our printers?
          Send us a message.
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-md-9 col-lg-7">

          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-lg-5">

              <h3 className="fw-bold mb-4">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label
                    htmlFor="contactName"
                    className="form-label"
                  >
                    Full Name
                  </label>

                  <input
                    type="text"
                    id="contactName"
                    className="form-control"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="contactEmail"
                    className="form-label"
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="contactEmail"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="contactMessage"
                    className="form-label"
                  >
                    Message
                  </label>

                  <textarea
                    id="contactMessage"
                    className="form-control"
                    rows="5"
                    placeholder="Write your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn hero-primary-btn w-100"
                >
                  Send Message →
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}

export default Contact;
