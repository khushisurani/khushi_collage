import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils.js";
import logoimg from "./img/logo.png";

function Footer() {
  const [deleteInfo, setdeleteInfo] = useState({
    Email: "",
    Fname: "",
    Lname: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const copySignup = { ...deleteInfo };
    copySignup[name] = value;
    setdeleteInfo(copySignup);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    const { Email, Fname, Lname } = deleteInfo;
    if (!Email) {
      return handleError("Email is required");
    }
    try {
      const url = await axios.delete(`http://localhost:4001/user/delete`, {
        data: { Email },
      });

      setdeleteInfo({
        Email: "",
      });
      if (Email) {
        localStorage.removeItem("firstName", Fname);
        localStorage.removeItem("lastName", Lname);
        localStorage.removeItem("email", Email);
        handleSuccess("User Delete!");
      }
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(deleteInfo),
      });
      const result = await response.json();
      const { success, message, error } = result;
      if (success) {
        setTimeout(() => {
          navigate("/Login");
        }, 1000);
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
      console.log(result);
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <>
      <div className="footer-p1">
        <ul className="footer-ul1">
          <header className="footer-header">K & K Rough Diamond</header>
          <Link to="/product" className="link-text">
            <li>Our Product</li>
          </Link>
          <Link to="/cart" className="link-text">
            <li>Cart</li>
          </Link>
          <Link to="/blog" className="link-text">
            <li>Blogs</li>
          </Link>
          <Link to="/Login" className="link-text">
            <li>Log in</li>
          </Link>
          <Link to="/Report" className="link-text">
            <li>Report</li>
          </Link>
          <Link to="/admin" className="link-text">
            <li>Admin</li>
          </Link>
        </ul>
        <ul className="footer-ul2">
          <header className="footer-header">About Us</header>
          <Link to="/Aboutsss" className="link-text">
            <li>Diamond mini guide</li>
          </Link>
          <Link to="/Aboutdg" className="link-text">
            <li>Our Diamond Gallery</li>
          </Link>
          <Link to="/Aboutdr" className="link-text">
            <li>delivery & Return</li>
          </Link>
          <Link to="/Certification" className="link-text">
            <li>Certification</li>
          </Link>
        </ul>
        <form onSubmit={handleDelete} className="footer-p2">
          <header className="footer-header">Sign Out to Email Delete</header>
          <input
            type="email"
            name="Email"
            id="email"
            placeholder="EMAIL ADDRESS"
            className="footer-email"
            value={deleteInfo.Email}
            onChange={handleChange}
          />
          <button type="submit" className="footer-btn">
            {" "}
            <Link to="/Login">Signout</Link>
          </button>
        </form>
        <ul className="footer-ul3">
          <header className="footer-header">Contact Us</header>
          <li>Tel: +86-371-68616866</li>
          <li>Fax: +86-371-68616868</li>
        </ul>
        <div className="footer-p3">
          <header className="footer-header">Follow Us</header>
          <nav className="nav-text">
            <i className="fa fa-facebook foter-f"></i>
            <i className="fa fa-whatsapp foter-w"></i>
            <i className="fa fa-instagram foter-i"></i>
          </nav>
        </div>
        <hr className="footer-hr" />
        <p className="footer-p">
          © 2018 K&K Rough Diamond. All Rights Reserved.
        </p>
        <img src={logoimg} alt="logo-img" className="footer-img" />
        <p className="footer-pp2">
          Rough diamonds may sometimes be mistaken for worthless pebbles.
          Diamonds are intrinsically worthless, except for the deep
          psychological need they fill.
        </p>
      </div>
      <ToastContainer />
    </>
  );
}

export default Footer;
