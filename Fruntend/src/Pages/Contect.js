import React, { useState } from "react";
// import { useForm } from "react-hook-form";
import { useAuth } from "../store/auth";
import Footer from "./Footer";

const defaultContactFormData = {
  username: "",
  lname: "",
  email: "",
  phone: "",
  message: "",
};

function Contect() {
  //   const { register, handleSubmit } = useForm();

  const [contact, setContact] = useState(defaultContactFormData);

  const [userData, setUserData] = useState(true);

  const { user } = useAuth();

  if (userData && user) {
    setContact({
      username: user.username,
      lname: user.lname,
      email: user.email,
      phone: user.phone,
      message: "",
    });
    setUserData(false);
  }

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${window.location.origin}/api/form/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      if (response.ok) {
        setContact(defaultContactFormData);
        const data = await response.json();
        console.log(data);
        alert("message send successfully");
      }
    } catch (error) {
      alert("message not send");
      console.log(error);
    }
    console.log(contact);
  };

  return (
    <>
      <div className="contact-us-container">
        <h1>Get in Touch</h1>
        <p>
          We are looking forward to offering you help about our products and
          related services.
        </p>
        <div className="contact-form">
          <form onSubmit={handleSubmit} id="reset">
            <span className="input-item-2">
              <i className="fa-regular fa-user"></i>
            </span>
            <input
              className="form-input2"
              type="text"
              name="username"
              id="username"
              placeholder="username"
              value={contact.username}
              onChange={handleInput}
              required
              autoComplete="off"
            />
            <span className="input-item-2">
              <i className="fa-regular fa-user"></i>
            </span>
            <input
              className="form-input2"
              type="text"
              name="lname"
              placeholder="lname"
              value={contact.lname}
              onChange={handleInput}
              required
              autoComplete="off"
            />
            <br />
            <span className="input-item-2">
              <i className="fa-regular fa-envelope"></i>
            </span>
            <input
              className="form-input2"
              type="email"
              name="email"
              id="email"
              placeholder="email"
              value={contact.email}
              onChange={handleInput}
              required
              autoComplete="off"
            />
            <span className="input-item-2">
              <i className="fa-solid fa-phone"></i>
            </span>
            <input
              className="form-input2"
              type="number"
              name="phone"
              id="phone"
              placeholder="phone"
              value={contact.phone}
              onChange={handleInput}
              required
              autoComplete="off"
            />
            <br />
            <span className="input-item-2">
              <i className="fa-regular fa-comment-dots"></i>
            </span>
            <input
              className="form-input2"
              type="text"
              name="message"
              id="message"
              placeholder="message"
              value={contact.message}
              onChange={handleInput}
              required
              autoComplete="off"
            />
            <br />
            <input type="submit" value="Submit" className="contact-btn" />
          </form>
        </div>
      </div>
      <div className="contact-us-container-2">
        <div className="bgvideo-text">
          <h4>Our Location</h4>
          <p>
            1841&1842, Tower A, Wanda Plaza, #171, Zhongyuan Road, Zhengzhou,
            Henan, India
          </p>
          <h2>Quick Touch</h2>
          <i className="fa-solid fa-phone bg-phone"></i>
          <h6>
            Tel: +86-371-68616866 <br /> Fax: +86-371-68616868
          </h6>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}

export default Contect;
