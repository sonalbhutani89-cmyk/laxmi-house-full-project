import { useState } from "react";
import "../App.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Message Sent Successfully!");

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("❌ Server Error");
    }
  };

  return (
    <section className="contact">
      <div className="contact-heading">
        <span>CONTACT US</span>

        <h2>Let's Build Your Dream Interior</h2>

        <p>
          Get in touch with us for premium glass, modular kitchen,
          plywood, hardware and interior solutions.
        </p>
      </div>

      <div className="contact-container">

        {/* Left Side */}

        <div className="contact-info">

          <div className="info-card">
            <h3>📍 Address</h3>
            <p>
              Lower Bazar, Sarkaghat,
              Himachal Pradesh - 175024
            </p>
          </div>

          <div className="info-card">
            <h3>📞 Phone</h3>
            <p>+91 94180 31457</p>
          </div>

          <div className="info-card">
            <h3>✉ Email</h3>
            <p>laxmiglasshouse@gmail.com</p>
          </div>

          <div className="info-card">
            <h3>🕒 Working Hours</h3>
            <p>
              Monday - Saturday
              <br />
              9:00 AM - 7:00 PM
            </p>
          </div>

        </div>

        {/* Right Side */}

        <div className="contact-form">

          <h3>Send Us A Message</h3>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}