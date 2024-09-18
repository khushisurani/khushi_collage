import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../store/auth";
import "./admin.css";

function ProductUpdate() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { authorizationToken } = useAuth();
  const navigate = useNavigate();

  const getProductData = async () => {
    try {
      const response = await fetch(
        `${window.location.origin}/api/admin/products/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setProduct(data || {});
      } else {
        console.error("Failed to fetch product data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProductData();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/products/update/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(product),
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("User updated:", data);
        toast.success("Update successful");
        navigate("/admin/adminproduct");
      } else {
        console.error("Failed to update user");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container update">
      <h1>Edit Product</h1>
      <form onSubmit={handleUpdate}>
        <label>
          Name:
          <input
            type="text"
            value={product?.name || ""}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            required
          />
        </label>
        <br />
        <label>
          Carat:
          <input
            type="text"
            value={product?.carat || ""}
            onChange={(e) => setProduct({ ...product, carat: e.target.value })}
            required
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="text"
            value={product?.price || ""}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
            required
          />
        </label>
        <br />
        <label>
          Upload Image:
          <input
            type="text"
            name="image"
            value={product?.image || ""}
            onChange={(e) => setProduct({ ...product, image: e.target.value })}
            required
          />
        </label>
        <br />
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
}

export default ProductUpdate;
