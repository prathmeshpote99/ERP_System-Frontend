import "../components/Sidebar/Sidebar.css";
import { Link } from "react-router-dom";
import SumagoLogo from "../components/Images/sumago_logo_dark.png";
import { useEffect, useState } from "react";
import axios from "axios";

const EmployeeSidebar = ({ show, setShow }) => {
  const [details, setDetails] = useState("");

  const sumagoWebsite = () => {
    window.open("https://www.sumagoinfotech.com/", "_blank");
  };

  useEffect(() => {
    let newData = { email: localStorage.getItem("email") };

    axios
      .post("http://localhost:7080/details/user", newData)
      .then((res) => {
        console.log(res.data);
        setDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className={show ? "space-toggle" : null}>
      <header className={`header ${show ? "space-toggle" : null}`}>
        <div
          className="header-toggle"
          onClick={() => setShow(!show)}
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Open"
        >
          <i
            className={`fas fa-bars ${show ? "fa-solid fa-xmark" : null}`}
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="Close"
          ></i>
        </div>
        <span>
          <h1>Sumago Infotech</h1>
        </span>
        <div
          className="profile"
          style={{ textAlign: "center", width: "20%", height:"62px", float: "right" }}
        >
          <i className="fa-solid fa-user" />
          <h6>{details.fName + " " + details.lName}</h6>
        </div>
      </header>

      <aside className={`sidebar ${show ? "show" : null}`}>
        <nav className="nav">
          <div>
            <Link
              to="/employeeDashboard"
              onClick={sumagoWebsite}
              className="nav-logo"
            >
              <img
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Sumago Infotech"
                className="nav-logo-icon"
                src={SumagoLogo}
                style={{ height: "50px", width: "50px" }}
                alt=""
              />
              {/* <i className={`fas fa-home-alt nav-logo-icon`}></i> */}
              <span className="nav-logo-name">SUMAGO INFOTECH</span>
            </Link>

            <div className="nav-list">
              <Link
                to="/employeeDashboard"
                className="nav-link active"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Dashboard"
              >
                <i className="fas fa-tachometer-alt nav-link-icon"></i>
                <span className="nav-link-name">Dashboard</span>
              </Link>
              <Link
                to="/leaverequest"
                className="nav-link"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Leave Request"
              >
                <i className="fas fa-solid fa-user-clock"></i>
                <span className="nav-link-name">Leave Request</span>
              </Link>
              <Link
                to="/EmployeeComplaintFrom"
                className="nav-link"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Complaint Form"
              >
                <i className="fas fa-solid fa-user-pen"></i>
                <span className="nav-link-name">Complaint Form</span>
              </Link>
              <Link
                to="/attendencesheet"
                className="nav-link"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Attendenced Sheet"
              >
                <i className="fas fa-solid fa-list-check"></i>
                <span className="nav-link-name">Attendence Sheet</span>
              </Link>
              <Link
                to="/feedbackform"
                className="nav-link"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Feedback Form"
              >
                <i className="fas fa-solid fa-comments"></i>
                <span className="nav-link-name">Feedback Form</span>
              </Link>
              <Link
                to="/employeesalaryslip"
                className="nav-link"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Salary Slip"
              >
                <i className="fas fa-solid fa-receipt"></i>
                <span className="nav-link-name">Salary Slip</span>
              </Link>
              {/* <Link
                to="/"
                className="nav-link"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Sign In"
              >
                <i className="fas fa-solid fa-right-to-bracket"></i>
                <span className="nav-link-name">Sign In</span>
              </Link> */}
            </div>
          </div>

          <Link
            to="/"
            className="nav-link"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="Logout"
          >
            <i className="fas fa-solid fa-right-from-bracket"></i>
            <span className="nav-link-name">Logout</span>
          </Link>
        </nav>
      </aside>
    </main>
  );
};

export default EmployeeSidebar;
