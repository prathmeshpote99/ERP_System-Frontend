import { useState } from "react";
import HrSidebar from "../hrComponents/HrSidebar";
import axios from "axios";

function EmployeeSalary() {
  const [show, setShow] = useState(false);
  const [Employee, setEmployee] = useState("");
  const [Date_of_joining, setDate_of_joining] = useState();
  const [Department, setDepartment] = useState("");
  const [Employee_code, setEmployee_code] = useState();
  const [Designation, setDesignation] = useState("");
  const [Present_day, setPresent_day] = useState();
  const [Back_Acc_no, setBack_Acc_no] = useState();
  //const [Absent_days, setAbsent_days] = useState();
  // const [Basic_pay, setBasic_pay] = useState();
  // const [Proffesional_Tax, setProffesional_Tax] = useState();
  // const [Hra, setHra] = useState();
  // const [Leaves, setLeaves] = useState();
  // const [Converience_alloyarce, setConverience_alloyarce] = useState();
  // const [Employee_contribution_PF, setEmployee_contribution_PF] = useState();
  // const [other_alloyarce, setOther_alloyarce] = useState();
  // const [Employee_contribution_ESIC, setEmployee_contribution_ESIC] =    useState();
  const [Gross_Salary, setGross_Salary] = useState();
  // const [Deduction, setDeduction] = useState();
  const [email, setEmail] = useState("");

  const onsubmit = (e) => {
    e.preventDefault();
    // window.location.reload(true);
    let addData = {
      Employee,
      Date_of_joining,
      Department,
      Employee_code,
      Designation,
      Present_day,
      Back_Acc_no,
      // Basic_pay,
      // Proffesional_Tax,
      // Hra,
      // Leaves,
      // Converience_alloyarce,
      // Employee_contribution_PF,
      // other_alloyarce,
      // Employee_contribution_ESIC,
      Gross_Salary,
      // Deduction,
      email,
    };

    axios
      .post("http://localhost:7080/salaryslip/add", addData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    setBack_Acc_no("");
    setDate_of_joining("");
    setEmployee("");
    setDepartment("");
    setEmployee_code("");
    setDesignation("");
    setPresent_day("");
    setGross_Salary("");
    setEmail("");
  };

  return (
    <>
      <div>
        <div className="row">
          <div className="col-2">
            <HrSidebar show={show} setShow={setShow} />
          </div>

          <div
            id="root"
            className={!show ? "col-9" : "container"}
            style={{ overflow: "hidden" }}
          >
            <form
              onSubmit={onsubmit}
              style={{ marginLeft: "10%", marginTop: "10%" }}
            >
              <div className="row">
                <div className="form-group col-md-6">
                  <label for="salary">Employee:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="salary"
                    name="Employee"
                    placeholder="Enter your Employee"
                    value={Employee}
                    onChange={(event) => {
                      setEmployee(event.target.value);
                    }}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="salary">Date of joining:</label>
                  <input
                    type="date"
                    className="form-control"
                    id="salary"
                    name="Date of joining"
                    value={Date_of_joining}
                    onChange={(event) => {
                      setDate_of_joining(event.target.value);
                    }}
                    //   placeholder="Enter your salary"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6">
                  <label for="salary">Department:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="salary"
                    name="Department"
                    placeholder="Enter your Department"
                    value={Department}
                    onChange={(event) => {
                      setDepartment(event.target.value);
                    }}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="salary">Employee code:</label>
                  <input
                    type="number"
                    className="form-control"
                    id="salary"
                    name="Employee code"
                    placeholder="Enter your Employee code"
                    value={Employee_code}
                    onChange={(event) => {
                      setEmployee_code(event.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6">
                  <label for="salary">Designation:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="salary"
                    name="Designation"
                    placeholder="Enter your Designation"
                    value={Designation}
                    onChange={(event) => {
                      setDesignation(event.target.value);
                    }}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="salary">Present day:</label>
                  <input
                    type="number"
                    className="form-control"
                    id="salary"
                    name="Present day"
                    required
                    placeholder="Enter your Present day"
                    value={Present_day}
                    onChange={(event) => {
                      setPresent_day(event.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6">
                  <label for="salary">Back Acc no:</label>
                  <input
                    type="number"
                    className="form-control"
                    id="salary"
                    name="Back_Acc_no"
                    placeholder="Enter your Back_Acc_no"
                    value={Back_Acc_no}
                    onChange={(event) => {
                      setBack_Acc_no(event.target.value);
                    }}
                  />
                </div>
                {/* <div className="form-group col-md-6">
                <label for="salary">Absent days:</label>
                <input
                  type="number"
                  className="form-control"
                  id="salary"
                  name="Absent_days"
                  placeholder="Enter your Absent_days"
                  value={Absent_days}
                  onChange={(event) => {
                    setAbsent_days(event.target.value);
                  }}
                />
              </div> */}

                <div className="form-group col-md-6">
                  <label for="salary">Gross_Salary:</label>
                  <input
                    type="number"
                    className="form-control"
                    id="salary"
                    name="Gross_Salary"
                    placeholder="Enter your Gross_Salary"
                    value={Gross_Salary}
                    onChange={(event) => {
                      setGross_Salary(event.target.value);
                    }}
                  />
                </div>
              </div>
              {/* <div className="row">
              <div className="form-group col-md-6">
                <label for="salary"> Basic pay:</label>
                <input
                  type="number"
                  className="form-control"
                  id="salary"
                  name=" Basic_pay"
                  placeholder="Enter your  Basic_pay"
                  value={Basic_pay}
                  onChange={(event) => {
                    setBasic_pay(event.target.value);
                  }}
                />
              </div>
              <div className="form-group col-md-6">
                <label for="salary">Proffesional Tax:</label>
                <input
                  type="number"
                  className="form-control"
                  id="salary"
                  name="Proffesional_Tax"
                  placeholder="Enter your Proffesional_Tax"
                  value={Proffesional_Tax}
                  onChange={(event) => {
                    setProffesional_Tax(event.target.value);
                  }}
                />
              </div>
            </div> */}
              {/* <div className="row">
              <div className="form-group col-md-6">
                <label for="salary"> HRA:</label>
                <input
                  type="number"
                  className="form-control"
                  id="salary"
                  name=" HRA"
                  placeholder="Enter your HRA"
                  value={Hra}
                  onChange={(event) => {
                    setHra(event.target.value);
                  }}
                />
              </div>
              <div className="form-group col-md-6">
                <label for="salary">Leaves:</label>
                <input
                  type="number"
                  className="form-control"
                  id="salary"
                  name="Leaves"
                  placeholder="Enter your Leaves"
                  value={Leaves}
                  onChange={(event) => {
                    setLeaves(event.target.value);
                  }}
                />
              </div>
            </div> */}
              {/* <div className="row">
              <div className="form-group col-md-6">
                <label for="salary">Converience_alloyarce:</label>
                <input
                  type="number"
                  className="form-control"
                  id="salary"
                  name="Converience_alloyarce"
                  placeholder="Enter your Converience_alloyarce"
                  value={Converience_alloyarce}
                  onChange={(event) => {
                    setConverience_alloyarce(event.target.value);
                  }}
                />
              </div>
              <div className="form-group col-md-6">
                <label for="salary">other_alloyarce:</label>
                <input
                  type="number"
                  className="form-control"
                  id="salary"
                  name="other_alloyarce"
                  placeholder="Enter your other_alloyarce"
                  value={other_alloyarce}
                  onChange={(event) => {
                    setOther_alloyarce(event.target.value);
                  }}
                />
              </div>
             
            </div> */}
              {/* <div className="row">
              <div className="form-group col-md-6">
                <label for="salary">Employee_contribution_ESIC:</label>
                <input
                  type="number"
                  className="form-control"
                  id="salary"
                  name="Employee contribution ESIC"
                  placeholder="Enter your Employee contribution ESIC"
                  value={Employee_contribution_ESIC}
                  onChange={(event) => {
                    setEmployee_contribution_ESIC(event.target.value);
                  }}
                />
              </div>
              <div className="form-group col-md-6">
                <label for="salary">Employee_contribution_PF:</label>
                <input
                  type="number"
                  className="form-control"
                  id="salary"
                  name="Employee contribution PF"
                  placeholder="Enter your Employee contribution PF"
                  value={Employee_contribution_PF}
                  onChange={(event) => {
                    setEmployee_contribution_PF(event.target.value);
                  }}
                />
              </div>
            
            </div>  */}
              <div className="row">
                <div className="form-group col-md-6">
                  <label for="salary">Email:</label>
                  <input
                    type="Email"
                    className="form-control"
                    id="salary"
                    name="Deduction"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </div>
              </div>

              {/* <div className="form-group col-md-6">
                <label for="currency">Currency:</label>
                  <select className="form-control" id="currency" name="currency">
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="gbp">GBP</option>
                  </select>
              </div> */}
              <div className="button mt-5" style={{ textAlign: "center" }}>
                <button type="submit" className="btn btn-primary mt-2">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeeSalary;
