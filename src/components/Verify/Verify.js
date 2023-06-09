import React, { useState } from "react";
import "./Verify.css";
// import Sidebar from "../Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

function Verify() {
  // const [show, setShow] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const navigate = useNavigate();

  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/");
    if (!passwordsMatch) {
      console.log("Passwords don't match");
      return;
    }
  };

  const handleChangePwd = (event) => {
    const { value } = event.target;
    setPassword(value);
    setIsValid(passwordRegex.test(value));
    setPasswordsMatch(event.target.value === password2);
  };

  const handlePassword2Change = (event) => {
    setPassword2(event.target.value);
    setPasswordsMatch(event.target.value === password);
  };

  return (
    <div>
      {/* <div className="row">
        <div className="col-4">
          <Sidebar show={show} setShow={setShow} />
        </div>
      </div> */}

      <div className="wrapper">
        <form onSubmit={onSubmit}>
          <div className="form-field d-flex align-items-center">
            <span className="fa-solid fa-key"></span>
            <input
              type="password"
              name="userName"
              id="userName"
              required
              value={password}
              onChange={handleChangePwd}
              placeholder="Enter New Password"
            />
          </div>
          {!isValid && (
            <p style={{ color: "red" }}>
              Password must be at least 8 characters long and contain at least
              one uppercase letter, one lowercase letter, and one digit.
            </p>
          )}
          <div className="form-field d-flex align-items-center">
            <span className="fa-solid fa-key"></span>
            <input
              type="password"
              name="password"
              id="pwd"
              value={password2}
              onChange={handlePassword2Change}
              required
              placeholder="Confirm Password"
            />
          </div>
          {!passwordsMatch && (
            <span style={{ color: "red" }}>Passwords do not match</span>
          )}
          <button type="submit" className="btn mt-3">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default Verify;
