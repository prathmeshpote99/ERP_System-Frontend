import React, { useEffect, useState } from "react";
import "./ComplaintList.css";
import Sidebar from "../Sidebar/Sidebar";
import axios from "axios";

const ComplaintList = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect((e) => {
    axios
      .get("http://localhost:7080/complaint/find")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:7080/feedback/find")
      .then((res) => {
        console.log(res.data);
        setFeedbackData(res.data);
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
          <div className="col-md-offset-1 col-md-10">
            <div className="panel">
              <div className="panel-heading">
                <div className="row">
                  <div className="col col-sm-3 col-xs-12">
                    <h4 className="title">
                      Complaint <span>List</span>
                    </h4>
                  </div>
                  {/* <div className="col-sm-9 col-xs-12 text-right">
                    <div className="btn_group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                      <button className="btn btn-default" title="Reload">
                        <i className="fa-solid fa-rotate-right"></i>
                      </button>
                      <button className="btn btn-default" title="Pdf">
                        <i className="fa-solid fa-plus"></i>
                      </button>
                      <button className="btn btn-default" title="Excel">
                        <i className="fas fa-file-excel"></i>
                      </button>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="panel-body table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Full Name</th>
                      <th>Subject</th>
                      <th>Complaint Box</th>
                    </tr>
                  </thead>
                  {data.map((item) => {
                    return (
                      <tbody>
                        <tr>
                          <td>{item.fullName}</td>
                          <td>{item.subject}</td>
                          <td>{item.compliantBox}</td>
                          {/* <td>
                            <ul className="action-list">
                              <li>
                                <Link to="/" data-tip="edit">
                                  <i className="fa fa-edit"></i>
                                </Link>
                              </li>
                              <li>
                                <Link to="/" data-tip="delete">
                                  <i className="fa fa-trash"></i>
                                </Link>
                              </li>
                            </ul>
                          </td> */}
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
              </div>
              {/* <div className="panel-footer">
                <div className="row">
                  <div className="col col-sm-6 col-xs-6">
                    showing <b>5</b> out of <b>25</b> entries
                  </div>
                  <div className="col-sm-6 col-xs-6">
                    <ul className="pagination hidden-xs pull-right">
                      <li>
                        <Link to="/">PREV</Link>
                      </li>
                      <li className="active">
                        <Link to="/">1</Link>
                      </li>
                      <li>
                        <Link to="/">2</Link>
                      </li>
                      <li>
                        <Link to="/">3</Link>
                      </li>
                      <li>
                        <Link to="/">4</Link>
                      </li>
                      <li>
                        <Link to="/">5</Link>
                      </li>
                      <li>
                        <Link to="/">NEXT</Link>
                      </li>
                    </ul>
                    <ul className="pagination visible-xs pull-right">
                      <li>
                        <Link to="/">PREV</Link>
                      </li>
                      <li>
                        <Link to="/">NEXT</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-offset-1 col-md-10">
            <div className="panel">
              <div className="panel-heading">
                <div className="row">
                  <div className="col col-sm-3 col-xs-12">
                    <h4 className="title">
                      Feedback <span>List</span>
                    </h4>
                  </div>
                  {/* <div className="col-sm-9 col-xs-12 text-right">
                    <div className="btn_group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                      <button className="btn btn-default" title="Reload">
                        <i className="fa-solid fa-rotate-right"></i>
                      </button>
                      <button className="btn btn-default" title="Pdf">
                        <i className="fa-solid fa-plus"></i>
                      </button>
                      <button className="btn btn-default" title="Excel">
                        <i className="fas fa-file-excel"></i>
                      </button>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="panel-body table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Feedback</th>
                    </tr>
                  </thead>
                  {feedbackData.map((item) => {
                    return (
                      <tbody>
                        <tr>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.feedback}</td>
                          {/* <td>
                            <ul className="action-list">
                              <li>
                                <Link to="/" data-tip="edit">
                                  <i className="fa fa-edit"></i>
                                </Link>
                              </li>
                              <li>
                                <Link to="/" data-tip="delete">
                                  <i className="fa fa-trash"></i>
                                </Link>
                              </li>
                            </ul>
                          </td> */}
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
              </div>
              {/* <div className="panel-footer">
                <div className="row">
                  <div className="col col-sm-6 col-xs-6">
                    showing <b>5</b> out of <b>25</b> entries
                  </div>
                  <div className="col-sm-6 col-xs-6">
                    <ul className="pagination hidden-xs pull-right">
                      <li>
                        <Link to="/">PREV</Link>
                      </li>
                      <li className="active">
                        <Link to="/">1</Link>
                      </li>
                      <li>
                        <Link to="/">2</Link>
                      </li>
                      <li>
                        <Link to="/">3</Link>
                      </li>
                      <li>
                        <Link to="/">4</Link>
                      </li>
                      <li>
                        <Link to="/">5</Link>
                      </li>
                      <li>
                        <Link to="/">NEXT</Link>
                      </li>
                    </ul>
                    <ul className="pagination visible-xs pull-right">
                      <li>
                        <Link to="/">PREV</Link>
                      </li>
                      <li>
                        <Link to="/">NEXT</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComplaintList;
