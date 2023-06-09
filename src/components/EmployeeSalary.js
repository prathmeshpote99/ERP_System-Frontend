import { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import axios from "axios";

function EmployeeSalary() {
  const [show, setShow] = useState(false);
  const [salary, setSalary] = useState();
  var [tax, setTax] = useState();
  // var [nsal, setNsal] = useState();
  const [email, setEmail] = useState("");
  const [fName, setFName] = useState("");

  function Calculation() {
    if (salary > 50000) {
      tax = (salary * 10) / 100;
    } else if (salary > 30000) {
      tax = (salary * 5) / 100;
    } else {
      tax = 0;
    }

    setTax(tax);

    // nsal = salary - tax;

    // setNsal(nsal);
  }

  const onsubmit = (e) => {
    e.preventDefault();
    let addData = { salary, tax, email, fName };

    axios
      .post("http://localhost:7080/salary/add", addData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="row">
        <div className="col-2">
          <Sidebar show={show} setShow={setShow} />
        </div>

        <div
          id="root"
          className={!show ? "col-9" : "container"}
          style={{ overflow: "hidden", marginLeft: "16%" }}
        >
          <h1>Employee's Salary</h1>
          <form onSubmit={onsubmit}>
            <div className="form-group mt-4">
              <label>Employee Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Employee Name"
                value={fName}
                onChange={(event) => {
                  setFName(event.target.value);
                }}
              />
            </div>

            <div className="form-group mt-4">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>

            <div className="form-group mt-4">
              <label>Salary</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Salary"
                value={salary}
                onChange={(event) => {
                  setSalary(event.target.value);
                }}
              />
            </div>

            <div className="form-group mt-4">
              <label>Tax</label>
              <input
                type="text"
                className="form-control"
                placeholder="Tax"
                value={tax}
                onChange={(event) => {
                  setTax(event.target.value);
                }}
              />
            </div>

            {/* <div className="form-group">
            <label>Net Salary</label>
            <input
              type="text"
              className="form-control"
              placeholder="Net Salary"
              value={nsal}
              onChange={(event) => {
                setNsal(event.target.value);
              }}
            />
          </div> */}

            <div className="button mt-4" style={{ textAlign: "center" }}>
              <button
                type="submit"
                onClick={Calculation}
                className="btn btn-primary mt-4"
                style={{
                  background: "linear-gradient(to bottom, #f30606, #aa0b0b)",
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EmployeeSalary;
