import React, { useEffect, useState } from "react";
import "./Salaryslip.css";
import EmployeeSidebar from "./EmployeeSidebar";
import axios from "axios";
// import logo1 from "../Images/sumago_logo_dark2.png";
import logo1 from "../components/Images/images1.png";

function Salaryslip() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState("");

  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");

  let newData = { email, password };

  const currentDate = new Date();

  // const age = [89, 28, 50, 25, 30, 50, 45, 30];

  // const uniqueAge = new Set(age);
  // console.log("uniqueAge", uniqueAge);
  // const dateMethods = Object.getOwnPropertyNames(Array.prototype);
  // console.log('dateMethods', dateMethods);

  console.log("Contents in currentDate", currentDate);
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  const currentYear = currentDate.getFullYear();

  const grossSalary = data?.Gross_Salary;
  const present_Days = data?.Present_day;
  const absent_days = 30 - present_Days;
  const basic_pay = 0.6 * grossSalary;

  // const deduction =
  // parseFloat(data?.Proffesional_Tax) +
  // parseFloat(data?.Leaves) +
  // parseFloat(data?.Employee_contribution_PF) +
  // parseFloat(data?.Employee_contribution_ESIC);
  // const total = grossSalary - deduction;

  const leaveDeductionRate = grossSalary / 30; // Assuming the leave deduction rate is 0.5%
  const leaveDeduction = absent_days * leaveDeductionRate;

  const pfDeduction = basic_pay * 0.12;

  //const esicRate = 0.06; // Assuming the ESIC rate is 1.75%
  //const esicDeduction = grossSalary * esicRate;

  //const taxRate = 0.0175;

  const taxDeduction = 200;

  const totalDeduction = leaveDeduction + pfDeduction + taxDeduction;

  // Tax calculation based on tax brackets or rules
  // const taxableIncome = grossSalary - data?.Proffesional_Tax;

  // let taxAmount = 0;

  // Define your tax brackets/rates here
  // const taxBrackets = [
  //   { minIncome: 0, maxIncome: 10000, rate: 0.1 },
  //   { minIncome: 10001, maxIncome: 50000, rate: 0.2 },
  //   { minIncome: 50001, maxIncome: Infinity, rate: 0.3 },
  // ];

  // Calculate tax based on the tax brackets/rates
  // for (const bracket of taxBrackets) {
  //   if (taxableIncome > bracket.minIncome) {
  //     const taxableAmount = Math.min(taxableIncome, bracket.maxIncome) - bracket.minIncome;
  //     taxAmount += taxableAmount * bracket.rate;
  //   } else {
  //     break;
  //   }
  // }

  useEffect(() => {
    axios
      .post("http://localhost:7080/salaryslip/find", newData)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));

    // axios.post("http://localhost:8080/attendenced/findOne",newData )
    // .then((res) => {
    //   console.log(res.data);
    //   setData(res.data);
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div>
        <div className="col-4">
          <EmployeeSidebar show={show} setShow={setShow} />
        </div>
      </div>
      <div
        className={!show ? "col-9" : "container"}
        style={{ overflow: "hidden", marginLeft: "15%" }}
      >
        {/* <div class="row">
        <div class="receipt-main col-xs-10 col-sm-10 col-md-6 col-xs-offset-1 col-sm-offset-1 col-md-offset-3">
          <div className="salary_logo">
            <img
              className="nav1-user-icon"
              src={logo1}
              alt=""
              style={{
                marginRight: "10%",
                marginLeft: "15%",
                marginTop: "-5%",
              }}
            />{" "}
            <span>
              <h1
                style={{
                  textAlign: "center",
                  marginTop: "-7%",
                  fontWeight: "bold",
                }}
              >
                Sumago Infotech
              </h1>
            </span>
          </div>
          <div class="row">
            <div class="receipt-header">
              <div class="col-xs-6 col-sm-6 col-md-6">
                <div class="receipt-left">
                  <img
                    class="img-responsive"
                    alt="iamgurdeeposahan"
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    style={{ width: "71px", borderRadius: "43px" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="receipt-header receipt-header-mid">
              <div class="col-xs-8 col-sm-8 col-md-8 text-left">
                <div class="receipt-right">
                  <h5>{data?.fName} </h5>
                  <p>
                    <b>Email :</b> {data?.email}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-right">
                    <p>
                      <strong>Salary: </strong>
                    </p>
                    <p>
                      <strong>Tax: </strong>
                    </p>
                  </td>
                  <td>
                    <p>
                      <strong>
                        <i class="fa fa-inr"></i> {data?.salary}
                      </strong>
                    </p>
                    <p>
                      <strong>
                        <i class="fa fa-inr"></i> {data?.tax}
                      </strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td class="text-right">
                    <h2>
                      <strong>Total: </strong>
                    </h2>
                  </td>
                  <td class="text-left text-danger">
                    <h2>
                      <strong>
                        <i class="fa fa-inr"></i> {data?.salary - data?.tax}
                      </strong>
                    </h2>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div> */}
        <table class="table table-bordered col-xs-10 col-sm-10 col-md-6">
          <thead>
            <tr>
              <th colspan="4" style={{ textAlign: "center" }}>
                <h1>
                  <img src={logo1} alt="" style={{ width: "90%" }} />
                </h1>
              </th>
            </tr>
            <tr>
              <th colSpan={4}>
                <h4
                  style={{ textTransform: "capitalize", textAlign: "center" }}
                >
                  Monthly Salary Slip {currentMonth} {currentYear}
                </h4>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="fw-bold">Employee Name</td>
              <td>{data?.Employee}</td>
              <td className="fw-bold">Date of joining</td>
              <td>{data?.Date_of_joining}</td>
            </tr>
            <tr>
              <td className="fw-bold">Department</td>
              <td>{data?.Department}</td>
              <td className="fw-bold">Employee code</td>
              <td>{data?.Employee_code}</td>
            </tr>
            <tr>
              <td className="fw-bold">Designation</td>
              <td>{data?.Designation}</td>
              <td className="fw-bold">Present Days</td>
              <td>{present_Days}</td>
            </tr>
            <tr>
              <td className="fw-bold">Bank A/c No.</td>
              <td>{data?.Back_Acc_no}</td>
              <td className="fw-bold">Absent Days</td>
              <td>{absent_days}</td>
            </tr>
            <tr style={{ textAlign: "center", fontSize: "20px" }}>
              <th style={{ fontSize: "1rem" }}>Particulars</th>
              <th style={{ fontSize: "1rem" }}>Amount</th>
              <th style={{ fontSize: "1rem" }}>Deduction</th>
              <th style={{ fontSize: "1rem" }}>Amount</th>
            </tr>
            <tr>
              <td>Basic</td>
              <td style={{ textAlign: "center" }}>{basic_pay}</td>
              <td>Proffesional Tax </td>
              <td style={{ textAlign: "center" }}>{taxDeduction}</td>
            </tr>
            <tr>
              <td>HRA</td>
              <td style={{ textAlign: "center" }}>{0.2 * grossSalary}</td>
              <td>Leaves</td>
              <td style={{ textAlign: "center" }}>
                {Math.floor(leaveDeduction)}
              </td>
            </tr>
            <tr>
              <td>Conveyance Allowance</td>
              <td style={{ textAlign: "center" }}>{0.1 * grossSalary}</td>
              <td>Employee Contribution PF</td>
              <td style={{ textAlign: "center" }}>{Math.floor(pfDeduction)}</td>
            </tr>
            <tr>
              <td>Other Allowance</td>
              <td style={{ textAlign: "center" }}>{0.1 * grossSalary}</td>
              <td>Employee Contribution ESIC</td>
              <td style={{ textAlign: "center" }}>0</td>
            </tr>
            <tr>
              <td className="fw-bold">Gross Salary</td>
              <td className="fw-bold" style={{ textAlign: "center" }}>
                {grossSalary}
              </td>
              <td className="fw-bold">Total Deduction</td>
              <td className="fw-bold" style={{ textAlign: "center" }}>
                {Math.floor(totalDeduction)}
              </td>
            </tr>
            <tr>
              <td colspan="3" className="text-center fw-bold">
                Amount Payable After Deductions for Month ( Net Payable )
              </td>
              <td
                className="fw-bold"
                colspan="1"
                style={{ textAlign: "center" }}
              >
                {Math.floor(grossSalary - totalDeduction)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Salaryslip;
