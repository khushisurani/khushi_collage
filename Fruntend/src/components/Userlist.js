import React, { useRef, useState } from "react";
import "./Userlist.css";

function Userlist() {
  const profilePIcDefault =
    "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg";
  // const [img] = useState(profilePIcDefault);
  const InputRef = useRef(null);
  const [img2, setImg2] = useState();
  const imgClick = () => {
    // profile img
    InputRef.current.click();
  };
  const imgClickChange = (event) => {
    event.preventDefault(); // profile img
    const file = event.target.files[0];
    console.log(file);
    setImg2(event.target.files[0]);
  };
  return (
    <>
      {/* <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> */}
      <div className="pro">
        <div className="profileset" onClick={imgClick}>
          {img2 ? (
            <img src={URL.createObjectURL(img2)} alt="img" />
          ) : (
            <img src={profilePIcDefault} alt="avatar" />
          )}
          <input
            type="file"
            ref={InputRef}
            onChange={imgClickChange}
            id="formFile"
            className="form-control"
          />
        </div>
        <div className="userlist">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <div className="ms-4">
                <h4>
                  First Name :{" "}
                  {localStorage.getItem("firstName")
                    ? localStorage.getItem("firstName")
                    : "NA"}
                </h4>
                <h4>
                  Last Name :{" "}
                  {localStorage.getItem("lastName")
                    ? localStorage.getItem("lastName")
                    : "NA"}
                </h4>
                <h4>
                  Email :{" "}
                  {localStorage.getItem("email")
                    ? localStorage.getItem("email")
                    : "NA"}
                </h4>
                <h4>
                  Phone :{" "}
                  {localStorage.getItem("phone")
                    ? localStorage.getItem("phone")
                    : "NA"}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Userlist;
