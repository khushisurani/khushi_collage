import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/ReactToastify.css";
import Nav from "./App";
import Cart from "./components/Cart";
import LayoutAdmin from "./components/layouts/LayoutAdmin.js";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
import Userlist from "./components/Userlist";
import "./index.css";
import About from "./Pages/About";
import Aboutdg from "./Pages/Aboutdg";
import Aboutdr from "./Pages/Aboutdr";
import Aboutsss from "./Pages/Aboutsss";
import AdminContacts from "./Pages/AdminContacts.js";
import AdminHome from "./Pages/AdminHome.js";
import AdminOrder from "./Pages/AdminOrder.js";
import AdminProduct from "./Pages/AdminProduct.js";
import AdminUpdate from "./Pages/AdminUpdate.js";
import AdminUsers from "./Pages/AdminUsers.js";
import Blog from "./Pages/Blog";
import Certification from "./Pages/Certification";
import Contactupdate from "./Pages/Contactupdate.js";
import Contect from "./Pages/Contect";
import Ctac from "./Pages/Createac";
import Footer from "./Pages/Footer";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Logout from "./Pages/Logout";
import Orderupdate from "./Pages/OrderUpdate.js";
import ProductUpdate from "./Pages/ProductUpdate.js";
import Report from "./Pages/Report";
import store from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./store/auth.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/Login" />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Ctac" element={<Ctac />} />
          <Route path="/" element={<Nav />}>
            <Route path="/home" element={<Home />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/" element={<Nav />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/About" element={<About />} />
            <Route path="/Aboutsss" element={<Aboutsss />} />
            <Route path="/Aboutdg" element={<Aboutdg />} />
            <Route path="/Certification" element={<Certification />} />
            <Route path="/Aboutdr" element={<Aboutdr />} />
            <Route path="/Contect" element={<Contect />} />
            <Route path="/product/:id" element={<ProductList />} />
            <Route path="/product" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/Report" element={<Report />} />
            <Route path="/Profile" element={<Userlist />} />
          </Route>
          <Route path="/admin" element={<LayoutAdmin />}>
            <Route path="" element={<AdminHome />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="contacts" element={<AdminContacts />} />
            <Route path="orders" element={<AdminOrder />} />
            <Route path="users/:id/edit" element={<AdminUpdate />} />
            <Route path="orders/:id/edit" element={<Orderupdate />} />
            <Route path="adminproduct" element={<AdminProduct />} />
            <Route path="contacts/:id/edit" element={<Contactupdate />} />
            <Route path="adminproduct/:id/edit" element={<ProductUpdate />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <Provider store={store}>
      <React.StrictMode>
        <App />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          bodyClassName="toastBody"
        />
      </React.StrictMode>
    </Provider>
  </AuthProvider>
);

reportWebVitals();
