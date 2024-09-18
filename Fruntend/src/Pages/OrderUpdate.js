import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../store/auth";
import "./admin.css";

function Orderupdate() {
  const { id } = useParams(); // Retrieve the user's ID from the URL
  const [order, setOrder] = useState({});
  const { authorizationToken } = useAuth();
  const navigate = useNavigate();

  const getOrderData = async () => {
    try {
      const response = await fetch(
        `${window.location.origin}/api/admin/orders/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setOrder(data || {}); // Handle case where data might be null
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
      //   (error.message);
    }
  };

  useEffect(() => {
    getOrderData();
  }, [id]); // Fetch user data when the component mounts or the id changes

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/orders/update/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(order),
        }
      );
      const data = await response.json();
      console.log("User updated:", data);
      toast.success("update successful");
      navigate("/admin/orders");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container update">
      <h1>Edit User</h1>
      <form onSubmit={handleUpdate}>
        <label>
          Username:
          <input
            type="text"
            value={order?.username || ""}
            onChange={(e) => setOrder({ ...order, username: e.target.value })}
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            type="number"
            value={order?.phone || ""}
            onChange={(e) => setOrder({ ...order, phone: e.target.value })}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            value={order?.address || ""}
            onChange={(e) => setOrder({ ...order, address: e.target.value })}
          />
        </label>
        <label>
          City:
          <input
            type="text"
            value={order?.city || ""}
            onChange={(e) => setOrder({ ...order, city: e.target.value })}
          />
        </label>
        <label>
          State:
          <input
            type="text"
            value={order?.state || ""}
            onChange={(e) => setOrder({ ...order, state: e.target.value })}
          />
        </label>
        <br />
        <button type="submit">Update User</button>
      </form>
    </div>
  );
}

export default Orderupdate;
