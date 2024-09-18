import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
import { useAuth } from "../store/auth";
import "./admin.css";

function AdminProduct() {
  const [productData, setProductData] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(5);
  const [loading, setLoading] = useState(false);
  const { authorizationToken } = useAuth();

  const getProductData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${window.location.origin}/api/admin/products?limit=${visibleProducts}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(`Product Data: ${JSON.stringify(data)}`);
      setProductData(data);
    } catch (error) {
      console.log(`Error fetching product data: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/products/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(`Users After Delete: ${JSON.stringify(data)}`);
      getProductData(); // Refresh product data after deletion
    } catch (error) {
      console.log(`Error deleting product: ${error}`);
    }
  };

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 6);
  };

  useEffect(() => {
    getProductData();
  }, [visibleProducts]); // Fetch data when visibleProducts changes

  return (
    <section className="admin contact-section">
      <div className="report-con">
        <div className="row report-p1">
          <div className="col report-p2 p2">Admin Product Data</div>
        </div>
        <div className="row report-p1">
          <div className="col-2 report-p2 p3">Image</div>
          <div className="col-3 report-p2 p3">Name</div>
          <div className="col-2 report-p2 p3">Carat</div>
          <div className="col-2 report-p2 p3">Price</div>
          <div className="col report-p2 p3">Edit</div>
          <div className="col report-p2 p3">Delete</div>
        </div>

        {productData.map((product, index) => (
          <div className="row report-p1" key={index}>
            <div className="col-2 report-p2 p3">
              <img
                src={product.image || "path/to/default-image.jpg"}
                alt={product.name}
                className="product-image"
              />
            </div>
            <div className="col-3 report-p2 p3">{product.name}</div>
            <div className="col-2 report-p2 p3">{product.carat}</div>
            <div className="col-2 report-p2 p3">{product.price}</div>
            <div className="col report-p2 p4">
              <Link to={`/admin/adminproduct/${product._id}/edit`}>
                <button className="edit">Edit</button>
              </Link>
            </div>
            <div className="col report-p2 p4">
              <button
                onClick={() => deleteProduct(product._id)}
                className="delete"
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        {loading && <p>Loading...</p>}

        {!loading && productData.length >= visibleProducts && (
          <div className="load-more">
            <button onClick={loadMoreProducts} className="load-more-btn">
              Load More
            </button>
          </div>
        )}

        {!loading && productData.length === 0 && <p>No products available.</p>}
      </div>
    </section>
  );
}

export default AdminProduct;
