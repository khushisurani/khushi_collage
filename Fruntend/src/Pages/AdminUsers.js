import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";
import "./admin.css";

function AdminUsers() {
  const [users, setUsers] = useState([]);
  const { authorizationToken } = useAuth();

  const getAllUsersData = async () => {
    try {
      const response = await fetch(`${window.location.origin}/api/admin/users`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log(`users ${data}`);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const data = await response.json();
      console.log(`users After Delete ${data}`);
      if (response.ok) {
        getAllUsersData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);
  return (
    <>
      <section className="admin user-section">
        <div className="report-con">
          <div className="row report-p1">
            <div className="col report-p2 p2">Admin Users Data</div>
          </div>
          <div className="row report-p1">
            <div className="col-2 report-p2 p3">Name</div>
            <div className="col-4 report-p2 p3">E-mail</div>
            <div className="col-2 report-p2 p3">Phone</div>
            <div className="col-2 report-p2 p3">Update</div>
            <div className="col-2 report-p2 p3">Delete</div>
          </div>
          {users.map((curUser, index) => {
            return (
              <div className="row report-p1" key={index}>
                <div className="col-2 report-p2 p4">{curUser.username}</div>
                <div className="col-4 report-p2 p4">{curUser.email}</div>
                <div className="col-2 report-p2 p4">{curUser.phone}</div>
                <div className="col-2 report-p2 p4">
                  <Link to={`/admin/users/${curUser._id}/edit`}>
                    <button className="edit">Edit</button>
                  </Link>
                </div>
                <div className="col-2 report-p2 p4">
                  <button
                    onClick={() => deleteUser(curUser._id)}
                    className="delete"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default AdminUsers;
