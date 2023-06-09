import React, { useEffect, useState } from "react";
import "./AttendenceList.css";
import Sidebar from "../Sidebar/Sidebar";
import axios from "axios";

const AttendenceList = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:7080/attendenced/find")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

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
                  <h3 className="text-white mb-0">Attendece List</h3>
                </div>
                <div className="table-responsive">
                  <table className="table align-items-center table-dark table-flush">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">Full Name</th>
                        <th scope="col">Months</th>
                        <th scope="col">Date</th>
                        <th scope="col">Status</th>
                        <th scope="col">Attendence in %</th>
                      </tr>
                    </thead>
                    {data.map((item) => {
                      return (
                        <tbody>
                          <tr>
                            <th>{item.fullName}</th>
                            <td>{item.months}</td>
                            <td>{item.date}</td>
                            <td>{item.status}</td>
                            <td>
                              <div className="d-flex align-items-center">
                                <span className="mr-2">
                                  {item.attendence_in_perc}%
                                </span>
                                <div>
                                  <div className="progress">
                                    <div
                                      className={`progress-bar 
                                        ${
                                          item.attendence_in_perc < 50
                                            ? "bg-danger"
                                            : "bg-success"
                                        }`}
                                      role="progressbar"
                                      aria-valuenow="60"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                      style={{
                                        width: `${item.attendence_in_perc}%`,
                                      }}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </td>
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
