import React, { useEffect, useState } from "react";
import EmployeeSidebar from "../userComponent/EmployeeSidebar";
import axios from "axios";

const EmployeeLeaveRequest = () => {
  const [show, setShow] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [leaveDate, setLeaveDate] = useState();
  const [data, setData] = useState([]);

  const onSubmit = () => {
    let addData = {
      fullName,
      email,
      reason,
      leaveDate,
    };
    axios
      .post("http://localhost:7080/addleave/add", addData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setFullName("");
    setLeaveDate("");
    setReason("");
    setEmail("");
  };

  useEffect(() => {
    axios
      .get("http://localhost:7080/approval/find")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

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
        style={{ overflow: "hidden", marginLeft: "15%", paddingLeft: "3%" }}
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
          <div class="form-group mt-4">
            <label for="inputField">Email:</label>
            <input
              type="email"
              class="form-control"
              id="inputField"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
        <table class="table user-list table-striped">
          <thead>
            <tr>
              <th>Email</th>
              <th>Approved / Reject</th>
            </tr>
          </thead>
          {data.map((item, index) => {
            let approvalStatus;

            if (item.isApproved) {
              approvalStatus = "Approved";
            } else {
              approvalStatus = "Rejected";
            }

            return (
              <tbody key={index}>
                <tr>
                  <td>{item.email}</td>
                  <td>{approvalStatus}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default EmployeeLeaveRequest;
