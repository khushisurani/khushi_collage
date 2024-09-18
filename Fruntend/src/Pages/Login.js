import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import diamond from "../images/WhatsApp Video 2024-07-05 at 15.47.17_526528da.mp4";
import { useAuth } from "../store/auth";

const URL = `${window.location.origin}/api/auth/login`;

function Login() {
  const [pwShown, setPwShown] = useState(false);

  const show = () => {
    const p = document.getElementById("pwd");
    if (p) p.setAttribute("type", "text");
  };

  const hide = () => {
    const p = document.getElementById("pwd");
    if (p) p.setAttribute("type", "password");
  };

  const togglePasswordVisibility = () => {
    if (!pwShown) {
      setPwShown(true);
      show();
    } else {
      setPwShown(false);
      hide();
    }
  };

  const [user, setUser] = useState({
    email: "",
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
    // console.log(user);
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("login form", response);

      const res_data = await response.json();

      if (response.ok) {
        storeTokenInLS(res_data.token);
        setUser({ email: "", password: "" });
        toast.success("Login successful");
        navigate("/home");
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
        console.log("invalid credential");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hideLoading = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(hideLoading);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const loadingSection = document.querySelector(".loading");
      const loadingImage = document.querySelector(".loading video");

      if (loadingImage) {
        loadingImage.addEventListener("transitionend", () => {
          loadingSection.style.display = "none";
          document.querySelector("body").style.overflow = "auto";
        });
        loadingImage.style.opacity = "0";
      }
    }
  }, [isLoading]);
  return (
    <>
      <div>
        {isLoading && (
          <div className="loading">
            <video autoPlay loop muted className="myVideo">
              <source src={diamond} type="video/mp4" />
            </video>
          </div>
        )}
        {!isLoading && (
          <>
            <div className="container">
              <h1>Login</h1>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="lable">
                    Email
                  </label>
                  <input
                    onChange={handleInput}
                    type="type"
                    name="email"
                    value={user.email}
                    placeholder="enter your email..."
                    autoComplete="off"
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type={pwShown ? "text" : "password"}
                    placeholder="enter your Password"
                    id="pwd"
                    name="password"
                    value={user.password}
                    onChange={handleInput}
                    required
                    autoComplete="off"
                  />
                  <span className="eye">
                    <i
                      className="fa fa-eye"
                      aria-hidden="true"
                      onClick={togglePasswordVisibility}
                      id="eye"
                    ></i>
                  </span>
                </div>
                <button type="submit">Login</button>
                <span>
                  Don't have an account ?<Link to="/Ctac">signup</Link>
                </span>
              </form>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Login;
