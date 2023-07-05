import React, { useEffect, useState } from "react";
import "./AttendenceList.css";
import Sidebar from "../Sidebar/Sidebar";
import axios from "axios";

const AttendenceList = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  // const absent_days =  30 -data.present_days ;
  useEffect(() => {
    axios
      .get("http://localhost:7080/attendenced/find")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const calculateAbsentDays = (presentDays) => {
    const totalDays = 30; // Assuming a total of 30 days
    return totalDays - presentDays;
  };

  return (
    <>
      <div>
        <div className="col-3">
          <Sidebar show={show} setShow={setShow} />
        </div>
      </div>
      <div
        className={!show ? "col-10" : "main-content"}
        style={{ overflow: "hidden", marginLeft: "15%" }}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card bg-default shadow">
                <div className="card-header bg-transparent border-0">
                  <h3 className="text-white mb-0">Attendenced list</h3>
                </div>
                <div className="table-responsive">
                  <table className="table align-items-center table-dark table-flush">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">Full Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Present days</th>
                        {/* <th scope="col">Present days</th> */}
                        <th scope="col">Absent days</th>
                      </tr>
                    </thead>
                    {data.map((item) => {
                      return (
                        <tbody>
                          <tr>
                            <td>{item.fullName}</td>
                            <td>{item.email}</td>
                            {/* <td>{item.attendence_in_perc}</td> */}
                            <td>{item.present_days}</td>
                            <td>{calculateAbsentDays(item.present_days)}</td>
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
      </div>
    </>
  );
};

export default AttendenceList;
