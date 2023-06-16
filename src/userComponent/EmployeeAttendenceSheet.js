import React, { useState } from "react";
import EmployeeSidebar from "./EmployeeSidebar";
import axios from "axios";

const EmployeeAttendenceSheet = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  // const [date, setDate] = useState("");
  const [present_days, setPresent_days] = useState();
  // const [absent_days, setAbsent_days] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    let addData = { email, present_days, fullName };

    axios
      .post("http://localhost:7080/attendenced/add", addData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    setEmail("");
    setFullName("");
    setPresent_days("");
  };

  return (
    <>
      <div>
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
            <div className="form-group mt-2">
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

            <div className="form-group mt-2">
              <label for="inputText">Present days:</label>
              <input
                type="number"
                className="form-control"
                id="inputText"
                placeholder="Enter text"
                value={present_days}
                onChange={(e) => setPresent_days(e.target.value)}
              />
            </div>

            {/* <div className="row mt-2" style={{ marginLeft: "-1%" }}> */}

            <div className="form-group mt-2 col-md-12">
              <label for="datepicker">Email:</label>
              <input
                type="email"
                className="form-control"
                id="datepicker"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* <div className="form-group col-md-6">
              <label for="datepicker">:</label>
              <input
                type="email"
                className="form-control"
                id="datepicker"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div> */}
            {/* </div> */}

            <div style={{ textAlign: "center" }} className="button">
              <button type="submit" className="btn btn-danger mt-4">
                Record Attendance
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EmployeeAttendenceSheet;
