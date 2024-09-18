import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../store/auth";
import "./admin.css";

function AdminContacts() {
  const [contactData, setContactData] = useState([]);
  const { authorizationToken } = useAuth();
  const getContactData = async () => {
    try {
      const response = await fetch(`${window.location.origin}/api/admin/contacts`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log("contact data", data);
      if (response.ok) {
        setContactData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContactById = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/contacts/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      if (response.ok) {
        getContactData();
        toast.success("delete successful");
      } else {
        toast.error("not deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContactData();
  }, []);
  return (
    <>
      <section className="admin Contact-section">
        <div className="report-con">
          <div className="row report-p1">
            <div className="col report-p2 p2">Admin Contact data</div>
          </div>
          <div className="row report-p1">
            <div className="col-2 report-p2 p3">Name</div>
            <div className="col-4 report-p2 p3">E-mail</div>
            <div className="col-2 report-p2 p3">Message</div>
            <div className="col-2 report-p2 p3">Update</div>
            <div className="col-2 report-p2 p3">Delete</div>
          </div>
          {contactData.map((curContactData, index) => {
            // const { username, email, message, _id } = curContactData;
            return (
              <div className="row report-p1" key={index}>
                <div className="col-2 report-p2 p4">
                  {curContactData.username}
                </div>
                <div className="col-4 report-p2 p4">{curContactData.email}</div>
                <div className="col-2 report-p2 p4">
                  {curContactData.message}
                </div>
                <div className="col-2 report-p2 p4">
                  <Link to={`/admin/contacts/${curContactData._id}/edit`}>
                    <button className="edit">Edit</button>
                  </Link>
                </div>
                <div className="col-2 report-p2 p4">
                  <button
                    onClick={() => deleteContactById(curContactData._id)}
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

export default AdminContacts;
