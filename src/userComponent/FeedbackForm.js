import React, { useState } from "react";
import EmployeeSidebar from "./EmployeeSidebar";
import axios from "axios";

const FeedbackForm = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const onSubmit = (e) => {
    let addData = {
      name,
      email,
      feedback,
    };
    axios
      .post("http://localhost:7080/feedback/add", addData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>
        <div className="col-2">
          <EmployeeSidebar show={show} setShow={setShow} />
        </div>
      </div>
      <div
        id="root"
        className={!show ? "col-9" : "container"}
        style={{ overflow: "hidden", marginLeft: "15%" }}
      >
        <div style={{ textAlign: "center" }} className="heading mt-5">
          <h1>Feedback Form</h1>
        </div>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label for="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group mt-4">
            <label for="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-4">
            <label for="message">Feedback:</label>
            <textarea
              className="form-control"
              id="message"
              rows="5"
              placeholder="Enter your fedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            ></textarea>
          </div>
          <div style={{ textAlign: "center" }} className="button mt-4">
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                background: "linear-gradient(to bottom, #f30606, #aa0b0b)",
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FeedbackForm;
