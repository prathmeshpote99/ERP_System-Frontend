import React, { useState } from "react";
import EmployeeSidebar from "./EmployeeSidebar";
import axios from "axios";

const EmployeeAttendenceSheet = () => {
  const [show, setShow] = useState(false);
  const [months, setMonths] = useState("");
  const [fullName, setFullName] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [attendence_in_perc, setAttendence] = useState();

  const onSubmit = (e) => {
    let addData = {
      months,
      fullName,
      date,
      status,
      attendence_in_perc,
    };
    axios
      .post("http://localhost:7080/attendenced/add", addData)
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
        <div className="heading mt-5" style={{ textAlign: "center" }}>
          <h1>Attendance Sheet</h1>
        </div>
        <form className="mt-5" onSubmit={onSubmit}>
          <div className="form-group">
            <label for="inputText">Full Name:</label>
            <input
              type="text"
              className="form-control"
              id="inputText"
              placeholder="Enter text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="form-group mt-4">
            <label for="inputText">Attendence Percentage:</label>
            <input
              type="text"
              className="form-control"
              id="inputText"
              placeholder="Enter text"
              value={attendence_in_perc}
              onChange={(e) => setAttendence(e.target.value)}
            />
          </div>

          <div style={{ marginLeft: "0%" }} className="row mt-4">
            <div className="form-group col-md-6">
              <label for="dropdown">Months:</label>
              <select
                className="form-control"
                id="dropdown"
                value={months}
                onChange={(e) => setMonths(e.target.value)}
              >
                <option value="">Please Select</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label for="datepicker">Date:</label>
              <input
                type="date"
                className="form-control"
                id="datepicker"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group mt-4">
            <label>Status:</label>
            <br />
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="radioOptions"
                id="radio1"
                value="Attended"
                onChange={(e) => setStatus(e.target.value)}
              />
              <label className="form-check-label" for="radio1">
                Attended
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="radioOptions"
                id="radio2"
                value="Skipped"
                onChange={(e) => setStatus(e.target.value)}
              />
              <label className="form-check-label" for="radio2">
                Skipped
              </label>
            </div>
          </div>
          <div style={{ textAlign: "center" }} className="button">
            <button
              type="submit"
              className="btn btn-primary mt-4"
              style={{
                background: "linear-gradient(to bottom, #f30606, #aa0b0b)",
              }}
            >
              Record Attendance
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EmployeeAttendenceSheet;
