import React, { useState } from "react";
import EmployeeSidebar from "../userComponent/EmployeeSidebar";
import axios from "axios";

const EmployeeLeaveRequest = () => {
  const [show, setShow] = useState(false);
  const [fullName, setFullName] = useState("");
  const [reason, setReason] = useState("");
  const [leaveDate, setLeaveDate] = useState();

  const onSubmit = (e) => {
    let addData = {
      fullName,
      reason,
      leaveDate,
    };
    axios
      .post("http://localhost:7080/addleave/add", addData)
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
          <h1>Leave Request</h1>
        </div>
        <form onSubmit={onSubmit}>
          <div className="form-group mt-4">
            <label for="inputField">Full Name:</label>
            <input
              type="text"
              className="form-control"
              id="inputField"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="form-group mt-4">
            <label for="textareaField">Reason of leave:</label>
            <textarea
              className="form-control"
              id="textareaField"
              rows="2"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group mt-4">
            <label for="dateField">Date of leave:</label>
            <input
              type="date"
              className="form-control"
              id="dateField"
              value={leaveDate}
              onChange={(e) => setLeaveDate(e.target.value)}
            />
          </div>
          <div style={{ textAlign: "center" }} className="button mt-4">
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                background: "linear-gradient(to bottom, #f30606, #aa0b0b)",
              }}
            >
              Request
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EmployeeLeaveRequest;
