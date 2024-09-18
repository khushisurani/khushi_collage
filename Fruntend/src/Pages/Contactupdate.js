import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../store/auth";
import "./admin.css";

function Contactupdate() {
  const { id } = useParams(); // Retrieve the user's ID from the URL
  const [contact, setContact] = useState({});
  const { authorizationToken } = useAuth();
  const navigate = useNavigate();

  const getContactData = async () => {
    try {
      const response = await fetch(
        `${window.location.origin}/api/admin/contacts/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setContact(data || {}); // Handle case where data might be null
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
      //   (error.message);
    }
  };

  useEffect(() => {
    getContactData();
  }, [id]); // Fetch user data when the component mounts or the id changes

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/contacts/update/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(contact),
        }
      );
      const data = await response.json();
      console.log("User updated:", data);
      toast.success("update successful");
      navigate("/admin/contacts");
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
            value={contact?.username || ""}
            onChange={(e) =>
              setContact({ ...contact, username: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={contact?.email || ""}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
          />
        </label>
        <br />
        <label>
          Message:
          <input
            type="text"
            value={contact?.message || ""}
            onChange={(e) =>
              setContact({ ...contact, message: e.target.value })
            }
          />
        </label>
        <br />
        <button type="submit">Update User</button>
      </form>
    </div>
  );
}

export default Contactupdate;
