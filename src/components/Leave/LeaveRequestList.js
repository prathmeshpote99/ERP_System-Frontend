import React, { useEffect, useState } from "react";
import "../Employees/EmployeeList.css";
import Sidebar from "../Sidebar/Sidebar";
import axios from "axios";

const LeaveRequestList = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

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
                <table className="table user-list">
                  <thead>
                    <tr>
                      <th>Full Name</th>
                      <th>Reason of Leave</th>
                      <th>Date of Leave</th>
                    </tr>
                  </thead>
                  {data.map((item) => {
                    return (
                      <tbody>
                        <tr>
                          <td>{item.fullName}</td>
                          <td>{item.reason}</td>
                          <td>{item.leaveDate}</td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaveRequestList;
