import React, { useState } from "react";
import "./SignIn.css";
// import Sidebar from "../Sidebar/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignIn() {
  // const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const newData = {
      email: email,
      password: password,
      userType: userType,
    };
    axios
      .post("http://localhost:7080/login", newData)
      .then((res) => {
        console.log(res.data);
        if (userType === "Admin") {
          navigate("/dashboard");
          localStorage.setItem("email", res.data.email);
          localStorage.setItem("password", res.data.password);
        }
        if (userType === "User") {
          navigate("/employeeDashboard");
          localStorage.setItem("email", res.data.email);
          localStorage.setItem("password", res.data.password);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="row">
        <div className="button_div" style={{ width: "100%" }}>
          <Link
            type="button"
            to="/addemployee"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="Add New Employee"
            className="btn btn-danger"
            style={{
              width: "4%",
              float: "right",
              margin: "3%",
              borderRadius: "20%",
            }}
          >
            <i
              style={{ marginRight: "8%" }}
              className="fa-solid fa-user-plus"
            ></i>
          </Link>
        </div>
      </div>

      <div className="wrapper">
        <div className="text-center mb-4 name">Signin</div>
        <form onSubmit={onSubmit}>
          <div className="form-field d-flex align-items-center">
            <span className="fa-solid fa-user"></span>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fa-solid fa-key"></span>
            <input
              type="password"
              name="password"
              id="pwd"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div
            className="dropdown"
            style={{ width: "100%", textAlign: "center" }}
          >
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Who you are...?
            </button>
            <ul style={{ width: "100%" }} className="dropdown-menu">
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => {
                    setUserType("Admin");
                    console.log("Selected Value: Admin");
                  }}
                >
                  Admin
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => {
                    setUserType("User");
                    console.log("Selected Value: User");
                  }}
                >
                  User
                </button>
              </li>
            </ul>
          </div>
          <button type="submit" className="btn mt-3">
            Sign In
          </button>
        </form>
        <div className="text-center fs-6">
          <Link to="/forget">Forget password?</Link>
          {/* or{" "}
          <Link to="/addadmin">Sign up</Link> */}
        </div>
      </div>
    </div>
  );
}

export default SignIn;
