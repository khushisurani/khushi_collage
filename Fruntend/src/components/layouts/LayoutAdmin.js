import React from "react";
import { Link, Navigate, NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../../store/auth";
import logo from "../logo.png";
import "./AdminLayout.css";

function LayoutAdmin() {
  const { user, isLoading } = useAuth();
  console.log("admin layout", user);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (user && !user.isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <header className="header">
        <div className="container2">
          <Link to="">
            <img src={logo} alt="logo" className="logoimg2" />
          </Link>
          <nav>
            <ul>
              <li>
                <NavLink to="/admin/users" className="navlink">
                  Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/contacts" className="navlink">
                  Contacts
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/adminproduct" className="navlink">
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/orders" className="navlink">
                  Orders
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="navlink">
                  Logout
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <Outlet />
    </>
  );
}

export default LayoutAdmin;
