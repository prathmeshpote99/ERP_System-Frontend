import React, { useState } from "react";
import EmployeeSidebar from "./EmployeeSidebar";
import axios from "axios";

const EmployeeComplaintFrom = () => {
  const [show, setShow] = useState(false);
  const [fullName, setFullName] = useState("");
  const [subject, setSubject] = useState("");
  const [compliantBox, setCompliantBox] = useState("");

  const onSubmit = (e) => {
    let addData = {
      fullName,
      subject,
      compliantBox,
    };
    axios
      .post("http://localhost:7080/complaint/add", addData)
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
          <h1>Complaint Form</h1>
        </div>
        <form className="mt-5" onSubmit={onSubmit}>
          <div className="form-group">
            <label for="input1">Full Name:</label>
            <input
              type="text"
              className="form-control"
              id="input1"
              placeholder="Enter Your Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="form-group mt-4">
            <label for="input2">Subject:</label>
            <input
              type="text"
              className="form-control"
              id="input2"
              placeholder="Subject of your complaint"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="form-group mt-4">
            <label for="textarea">Complaint Box:</label>
            <textarea
              className="form-control"
              id="textarea"
              rows="5"
              value={compliantBox}
              onChange={(e) => setCompliantBox(e.target.value)}
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
              Complaint
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EmployeeComplaintFrom;
