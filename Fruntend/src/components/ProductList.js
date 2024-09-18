import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../Pages/Footer";
import { addToCart } from "../redux/cartSlice";
import { useAuth } from "../store/auth";

const ProductList = () => {
  const { services } = useAuth(); 
  const dispatch = useDispatch();
  const { id } = useParams(); 
  const [products, setProducts] = useState([]);

  useState(() => {
    setProducts(services);
  }, [services]);

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const { name, carat, Description, price, image } = product;

  return (
    <>
      <div className="product-details">
        <div className="product-details-p1">
          <img src={image} alt={name} />
        </div>
        <div className="product-details-p2">
          <h2>{name}</h2>
          <hr className="hr1" />
          <h4 className="price">${price}</h4>
          <p className="stock">1 in stock</p>
          <input
            type="number"
            name="stock"
            id="stock"
            value={1}
            className="stock-input"
          />
          <br />
          <button onClick={handleAddToCart} className="cartbutton">
            Add to Cart
          </button>
          <p className="c-w-d">
            <b>Carat Weight :</b> {carat}
          </p>
          <p className="c-w-d">
            <b>Description :</b> {Description}
          </p>
          <hr className="hr1" />
          <h5>100% Guarantee</h5>
          <hr className="hr1" />
          <h5>Customer Service</h5>
          <p className="qus">Questions? Call us +86-371-68616866</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductList;
