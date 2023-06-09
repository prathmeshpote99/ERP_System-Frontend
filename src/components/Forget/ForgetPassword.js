import React, { useState } from "react";
import "./ForgetPassword.css";
// import Sidebar from "../Sidebar/Sidebar";
import Modal from "react-modal";
import { Link } from "react-router-dom";

function ForgetPassword() {
  // const [show, setShow] = useState(false);

  const [modelIsOpen, setModelIsOpen] = useState(false);

  const openModel = (e) => {
    e.preventDefault();
    alert("OTP send in your mail");
    setModelIsOpen(true);
  };

  const closeModel = () => {
    setModelIsOpen(false);
  };

  return (
    <>
      <Modal
        isOpen={modelIsOpen}
        onRequestClose={closeModel}
        contentLabel="Modal"
      >
        <div
          className="Modal_div"
          style={{ height: "100%", width: "100%", alignItems: "center" }}
        >
          <div className="Modal_inner_div">
            <input
              className="form-control mt-5"
              type="text"
              placeholder="Enter OTP"
            />
            <br />
            <Link to="/verify" className="btn btn-primary" onClick={closeModel}>
              Verify
            </Link>
          </div>
        </div>
      </Modal>
      <div>
        {/* <div className="row">
          <div className="col-4">
            <Sidebar show={show} setShow={setShow} />
          </div>
        </div> */}

        <div className="wrapper">
          <form>
            <div className="form-field d-flex align-items-center">
              <span className="fa-solid fa-envelope"></span>
              <input
                type="email"
                name="userName"
                id="userName"
                required
                placeholder="Email"
              />
            </div>
            {/* <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input
              type="password"
              name="password"
              id="pwd"
              placeholder="Password"
            />
          </div> */}
            <button type="submit" className="btn mt-2" onClick={openModel}>
              Reset
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ForgetPassword;
