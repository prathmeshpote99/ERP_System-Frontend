import React, { useEffect, useState } from "react";
import "../Employees/EmployeeList.css";
import Sidebar from "../Sidebar/Sidebar";
import axios from "axios";

const LeaveRequestList = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [isApproved, setIsApproved] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let addData = { isApproved, email };
    console.log("msg:", isApproved);
    axios
      .post("http://localhost:7080/approval/add", addData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:7080/addleave/find")
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
          <Sidebar show={show} setShow={setShow} />
        </div>
      </div>
      <div
        className={!show ? "col-9" : "container"}
        style={{ overflow: "hidden", marginLeft: "15%" }}
      >
        <div className="row">
          <div className="col-lg-12">
            <div className="main-box clearfix">
              <div style={{ textAlign: "center" }} className="heading mt-5">
                <h1>Leave Requests List</h1>
              </div>
              <div className="table-responsive mt-5">
                <form onClick={handleSubmit}>
                  <table className="table user-list">
                    <thead>
                      <tr>
                        <th>Full Name</th>
                        <th>Reason of Leave</th>
                        <th>Date of Leave</th>
                        <th>Email</th>
                        <th>Approved / Reject</th>
                      </tr>
                    </thead>
                    {data.map((item, index) => {
                      return (
                        <tbody>
                          <tr>
                            <td>{item.fullName}</td>
                            <td>{item.reason}</td>
                            <td>{item.leaveDate}</td>
                            <td>{item.email}</td>
                            <td>
                              <button
                                className="btn btn-primary"
                                onClick={() => {
                                  setEmail(item.email);
                                  setIsApproved(true);
                                }}
                              >
                                Approve <i class="fa-solid fa-check"></i>
                              </button>
                              <button
                                className="btn btn-danger"
                                style={{ marginLeft: "10%" }}
                                onClick={() => {
                                  setEmail(item.email);
                                  setIsApproved(false, "Reject");
                                }}
                              >
                                Reject <i class="fa-solid fa-trash"></i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </table>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaveRequestList;
