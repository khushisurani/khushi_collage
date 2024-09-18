import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../store/auth";
import "./admin.css";

function AdminOrder() {
  const [orderData, setOrderData] = useState([]);
  const { authorizationToken } = useAuth();
  const getContactData = async () => {
    try {
      const response = await fetch(`${window.location.origin}/api/admin/orders`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log("contact data", data);
      if (response.ok) {
        setOrderData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContactById = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/orders/delete/${id}`,
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
            <div className="col-2 report-p2 p3">Phone</div>
            <div className="col-2 report-p2 p3">Address</div>
            <div className="col-2 report-p2 p3">City</div>
            <div className="col-2 report-p2 p3">State</div>
            <div className="col report-p2 p3">Update</div>
            <div className="col report-p2 p3">Delete</div>
          </div>
          {orderData.map((curContactData, index) => {
            return (
              <div className="row report-p1" key={index}>
                <div className="col-2 report-p2 p4">
                  {curContactData.username}
                </div>
                <div className="col-2 report-p2 p4">{curContactData.phone}</div>
                <div className="col-2 report-p2 p4">
                  {curContactData.address}
                </div>
                <div className="col-2 report-p2 p4">{curContactData.city}</div>
                <div className="col-2 report-p2 p4">{curContactData.state}</div>
                <div className="col report-p2 p4">
                  <Link to={`/admin/orders/${curContactData._id}/edit`}>
                    <button className="edit">Edit</button>
                  </Link>
                </div>
                <div className="col report-p2 p4">
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

export default AdminOrder;
