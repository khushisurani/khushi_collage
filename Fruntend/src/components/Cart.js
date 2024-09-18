// import axios from "axios";
import React, { useState } from "react";
// import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart } from "../redux/cartSlice";
import { useAuth } from "../store/auth";
import "./ProductList.css";

const defaultOrderFormData = {
  username: "",
  lname: "",
  phone: "",
  address: "",
  state: "",
  city: "",
};

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [showModal, setShowModal] = useState(false);
  // const { register, handleSubmit, reset } = useForm();

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  const totalPrice = cartItems.reduce((total, item) => {
    // Ensure item.price is a number
    const price = parseFloat(item.price);
    if (isNaN(price)) {
      return total; // Skip this item if price is invalid
    }
    return total + price;
  }, 0);
  const formattedTotalPrice = totalPrice.toFixed(2);

  // const onSubmit = async (data, e) => {
  //   e.preventDefault();
  //   const userInfo = {
  //     f_name: data.f_name,
  //     l_name: data.l_name,
  //     mo_number: data.mo_number,
  //     state: data.state,
  //     city: data.city,
  //     area: data.area,
  //     payment_method: data.payment_method,
  //   };

  //   try {
  //     const res = await axios.post(
  //       "http://localhost:4001/user/placeorder",
  //       userInfo
  //     );
  //     alert(res.data.message);
  //     reset(); // Reset form using react-hook-form
  //     setShowModal(false); // Close modal after submission
  //   } catch (err) {
  //     console.error(err);
  //     if (err.response) {
  //       alert("Error: " + err.response.data.message);
  //     } else {
  //       alert("An unexpected error occurred.");
  //     }
  //   }
  // };

  const [order, setOrder] = useState(defaultOrderFormData);

  const [userData, setUserData] = useState(true);

  const { user } = useAuth();

  if (userData && user) {
    setOrder({
      username: user.username,
      lname: user.lname,
      phone: user.phone,
      address: "",
      state: "",
      city: "",
    });
    setUserData(false);
  }

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setOrder({
      ...order,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${window.location.origin}/api/form/order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });
      if (response.ok) {
        setOrder(defaultOrderFormData);
        const data = await response.json();
        console.log(data);
        alert("message send successfully");
      }
    } catch (error) {
      alert("message not send");
      console.log(error);
    }
    console.log(order);
  };

  return (
    <>
      <div className="cart">
        <div className="cart-1">
          <h1>Your Cart</h1>
          <button onClick={handleClear} className="clear-cart-button">
            Clear Cart
          </button>
        </div>
        {cartItems.length === 0 ? (
          <p className="empty-cart-message">Your cart is empty.</p>
        ) : (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>

                  <button
                    onClick={() => handleRemove(item)}
                    className="remove-button"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <>
              <div className="place-order-container">
                <h4 className="totalP">
                  Total Price : ₹ {formattedTotalPrice}
                </h4>

                <button
                  className="buy-btn placeorder"
                  onClick={() => setShowModal(true)}
                >
                  Place Order
                </button>
              </div>
              {showModal && (
                <div
                  className="modal fade show"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-modal="true"
                  role="dialog"
                  style={{ display: "block" }}
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Fill Your Information
                        </h5>
                        <button
                          type="button"
                          className="btn-close closebtn"
                          onClick={() => setShowModal(false)}
                          aria-label="Close"
                        >
                          X
                        </button>
                      </div>
                      <div className="modal-body">
                        <form id="input1" onSubmit={handleSubmit}>
                          <input
                            type="text"
                            name="username"
                            placeholder="first name"
                            className="in1"
                            id="username"
                            value={order.username}
                            onChange={handleInput}
                            required
                            autoComplete="off"
                          />
                          <input
                            type="text"
                            placeholder="last name"
                            className="in2"
                            id="lname"
                            name="lname"
                            value={order.lname}
                            onChange={handleInput}
                            required
                            autoComplete="off"
                          />
                          <br />
                          <input
                            type="number"
                            placeholder="phone number"
                            maxLength={10}
                            className="in1"
                            id="num"
                            name="phone"
                            value={order.phone}
                            onChange={handleInput}
                            required
                            autoComplete="off"
                          />
                          <br />
                          <label className="l1">Address</label>
                          <br />
                          <input
                            type="text"
                            placeholder="state"
                            className="in2"
                            id="address"
                            name="state"
                            value={order.state}
                            onChange={handleInput}
                            required
                            autoComplete="off"
                          />
                          <input
                            type="text"
                            placeholder="city"
                            className="in2"
                            id="address"
                            name="city"
                            value={order.city}
                            onChange={handleInput}
                            required
                            autoComplete="off"
                          />
                          <br />
                          <input
                            type="text"
                            className="in4"
                            placeholder="house number, building name, area name"
                            name="address"
                            value={order.address}
                            onChange={handleInput}
                            required
                            autoComplete="off"
                          />
                          <br />
                          <div className="totalp">
                            Total Price :
                            <p className="totalINform">
                              {" "}
                              ₹ {formattedTotalPrice}
                            </p>
                          </div>

                          <br />

                          <label className="l1" id="gender">
                            Payment
                          </label>
                          <div className="rb">
                            <input type="radio" className="ckb" value="COD" />
                            <label>Cash on Delivery</label> <br />
                            <input
                              type="radio"
                              className="ckb"
                              value="Online"
                              disabled
                            />
                            <label className="opd">
                              Online Payment (Using Credit Card)
                            </label>
                          </div>
                          <button
                            type="submit"
                            className="btn-submit orderSubmit"
                          >
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
