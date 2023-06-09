import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./AddNewAdmin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddNewAdmin() {
  const [show, setShow] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState();
  const [isValid, setIsValid] = useState(true);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");

  const navigate = useNavigate();

  const phoneNumberRegex = /^\+?([0-9]{2})\)?[-. ]?[7-9]\d{9}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const onSubmit = (e) => {
    e.preventDefault();
    let newData = {
      email: email,
      password: password,
      contact: phoneNumber,
      fName: fName,
      lName: lName,
      userType: "Admin",
    };
    axios
      .post("http://localhost:7080/erp/add", newData)
      .then((res) => {
        console.log(res.data);
        navigate("/");
        alert(`Congrats...! ${fName} you are Admin now`);
      })
      .catch((err) => console.log(err));
    if (isValid) {
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setPhoneNumber(value);
    setIsValid(phoneNumberRegex.test(value));
    const inputValue = event.target.value.replace(/\D/g, "");
    setPhoneNumber(inputValue.slice(0, 10));
  };

  const handleChangePwd = (event) => {
    const { value } = event.target;
    setPassword(value);
    setIsValid(passwordRegex.test(value));
  };

  return (
    <div>
      <div className="row">
        <div className="col-4">
          <Sidebar show={show} setShow={setShow} />
        </div>
      </div>
      <div className="wrapper1 mt-5">
        {/* <div className="logo">
          <img className="logo1" src={logo} alt="" />
        </div> */}
        <div className="text-center mt-4 name">ADD NEW ADMIN</div>
        <form className="p-3" onSubmit={onSubmit}>
          {/* <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="Username"
              required
            />
          </div> */}
          <div className="form-field d-flex align-items-center">
            <span className="fa-solid fa-envelope"></span>
            <input
              type="email"
              name="Email"
              id="Email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fa-solid fa-user"></span>
            <input
              type="text"
              name="FirstName"
              id="FirstName"
              required
              placeholder="FirstName"
              value={fName}
              onChange={(e) => setFName(e.target.value)}
            />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fa-solid fa-user"></span>
            <input
              type="text"
              name="LastName"
              id="LastName"
              required
              value={lName}
              onChange={(e) => setLName(e.target.value)}
              placeholder="LastName"
            />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fa-solid fa-phone"></span>
            <input
              type="number"
              name="Contact"
              id="Contect"
              value={phoneNumber}
              placeholder="Contact"
              onChange={handleChange}
            />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fa-solid fa-key"></span>
            <input
              type="password"
              name="password"
              id="pwd"
              required
              value={password}
              onChange={handleChangePwd}
              placeholder="Password"
            />
          </div>
          {!isValid && (
            <p style={{ color: "red" }}>
              Password must be at least 8 characters long and contain at least
              one uppercase letter, one lowercase letter, and digits.
            </p>
          )}
          <button type="submit" className="btn mt-3">
            Add Me
          </button>
        </form>
        {/* <div className="text-center fs-6">
          <Link to="/">Forget password?</Link> or <Link to="/">Sign up</Link>
        </div> */}
      </div>
    </div>
  );
}

export default AddNewAdmin;
