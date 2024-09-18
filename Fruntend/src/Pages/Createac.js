import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useAuth } from "../store/auth";

const URL = `${window.location.origin}/api/auth/register`;

function Createac() {
  const [user, setUser] = useState({
    username: "",
    lname: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();

  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("User data:", user);

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();
      console.log("res from server", res_data.extraDetails);

      if (response.ok) {
        storeTokenInLS(res_data.token);
        setUser({
          username: "",
          lname: "",
          email: "",
          phone: "",
          password: "",
        });
        toast.success("Registration successful");
        navigate("/home");
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
      }
      if (user) {
        localStorage.setItem("firstName", user.username);
        localStorage.setItem("lastName", user.lname);
        localStorage.setItem("email", user.email);
        localStorage.setItem("phone", user.phone);
      }
    } catch (error) {
      console.error("register", error);
    }
  };
  return (
    <>
      <div className="container">
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="lable">
              FirstName
            </label>
            <input
              onChange={handleInput}
              type="text"
              name="username"
              autoFocus
              value={user.username}
              placeholder="enter your name FirstName..."
              required
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="lname" className="lable">
              LastName
            </label>
            <input
              onChange={handleInput}
              type="text"
              name="lname"
              autoFocus
              value={user.lname}
              placeholder="enter your LastName..."
              required
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="email" className="lable">
              Email
            </label>
            <input
              onChange={handleInput}
              type="email"
              name="email"
              value={user.email}
              placeholder="enter your email..."
              required
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="phone" className="lable">
              Phone
            </label>
            <input
              onChange={handleInput}
              type="number"
              name="phone"
              value={user.phone}
              placeholder="enter your phone..."
              required
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="password" className="lable">
              password
            </label>
            <input
              onChange={handleInput}
              type="password"
              name="password"
              value={user.password}
              placeholder="enter your password..."
              required
              autoComplete="off"
            />
          </div>
          <button type="submit">Signup</button>
          <span>
            Al ready have an account ?<Link to="/Login">Login</Link>
          </span>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

export default Createac;
