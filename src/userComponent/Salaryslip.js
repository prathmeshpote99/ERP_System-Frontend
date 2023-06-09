import React, { useEffect, useState } from "react";
import "./Salaryslip.css";
import EmployeeSidebar from "./EmployeeSidebar";
import axios from "axios";
import logo from "../components/Images/sumago_logo_dark.png";

function Salaryslip() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState("");

  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");

  let newData = { email, password };

  useEffect(() => {
    axios
      .post("http://localhost:7080/salary/find", newData)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
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
        className={!show ? "col-8" : "col-10"}
        style={{ overflow: "hidden", marginLeft: "15%" }}
      ></div>

      <div className="row">
        <div className="receipt-main col-xs-10 col-sm-10 col-md-6 col-xs-offset-1 col-sm-offset-1 col-md-offset-3">
          <div style={{ marginLeft: "25%" }} className="background_logo">
            <img
              style={{
                opacity: "20%",
                width: "45%",
                height: "75%",
                position: "absolute",
              }}
              src={logo}
              alt=""
            />
          </div>
          <div className="row">
            <div className="receipt-header">
              <div className="col-xs-6 col-sm-6 col-md-6">
                <div className="receipt-left">
                  <i
                    class="fa-solid fa-circle-user fa-2xl"
                    style={{
                      width: "71px",
                      borderRadius: "43px",
                      color: "#2352a4",
                    }}
                  ></i>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="receipt-header receipt-header-mid">
              <div className="col-xs-8 col-sm-8 col-md-8 text-left">
                <div className="receipt-right">
                  <h5>{data?.fName} </h5>
                  <p>
                    <b>Email :</b> {data?.email}
                  </p>
                </div>
              </div>
              {/* <div className="col-xs-4 col-sm-4 col-md-4">
                  <div className="receipt-left">
                    <h3>INVOICE # 102</h3>
                  </div>
                </div> */}
            </div>
          </div>

          <div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {/* <tr>
                    <td className="col-md-9">Payment for August 2016</td>
                    <td className="col-md-3">
                      <i className="fa fa-inr"></i> 15,000/-
                    </td>
                  </tr> */}
                {/* <tr>
                    <td className="col-md-9">Payment for June 2016</td>
                    <td className="col-md-3">
                      <i className="fa fa-inr"></i> 6,00/-
                    </td>
                  </tr> */}
                {/* <tr>
                    <td className="col-md-9">Payment for May 2016</td>
                    <td className="col-md-3">
                      <i className="fa fa-inr"></i> 35,00/-
                    </td>
                  </tr> */}
                <tr>
                  <td className="text-right">
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
                        <i className="fa fa-inr"></i> {data?.salary}
                      </strong>
                    </p>
                    <p>
                      <strong>
                        <i className="fa fa-inr"></i> {data?.tax}
                      </strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="text-right">
                    <h2>
                      <strong>Total: </strong>
                    </h2>
                  </td>
                  <td className="text-left text-danger">
                    <h2>
                      <strong>
                        <i className="fa fa-inr"></i> {data?.salary - data?.tax}
                      </strong>
                    </h2>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Salaryslip;
