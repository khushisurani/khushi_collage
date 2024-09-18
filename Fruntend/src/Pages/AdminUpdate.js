import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../store/auth";
import "./admin.css";

function AdminUpdate() {
  const { id } = useParams(); // Retrieve the user's ID from the URL
  const [user, setUser] = useState({}); // Initialize as an empty object
  const { authorizationToken } = useAuth();
  const navigate = useNavigate();

  const getUserData = async () => {
    try {
      const response = await fetch(
        `${window.location.origin}/api/admin/users/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setUser(data || {}); // Handle case where data might be null
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, [id]); // Fetch user data when the component mounts or the id changes

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/update/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(user),
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("User updated:", data);
        toast.success("Update successful");
        navigate("/admin/users");
      } else {
        console.error("Failed to update user");
      }
    } catch (error) {
      console.error(error);
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
            value={user?.username || ""} // Use optional chaining
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={user?.email || ""}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            type="number"
            value={user?.phone || ""}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
          />
        </label>
        <br />
        <button type="submit">Update User</button>
      </form>
    </div>
  );
}

export default AdminUpdate;
