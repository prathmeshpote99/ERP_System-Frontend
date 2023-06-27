import "./Sidebar.css";
import { Link } from "react-router-dom";
import SumagoLogo from "../Images/sumago_logo_dark.png";
import { useEffect, useState } from "react";
import axios from "axios";
// import Dashboard from "../Dashboard";

const Sidebar = ({ show, setShow }) => {
  const [details, setDetails] = useState("");

  const sumagoWebsite = () => {
    window.open("https://www.sumagoinfotech.com/", "_blank");
  };

  useEffect(() => {
    let newData = { email: localStorage.getItem("email") };

    axios
      .post("http://localhost:7080/details/admin", newData)
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
        <div
          className="profile"
          style={{
            textAlign: "center",
            width: "20%",
            height: "62px",
            float: "right",
          }}
        >
          <i className="fa-solid fa-user" />
          <h6>{details.fName + " " + details.lName}</h6>
        </div>
      </header>

      <aside className={`sidebar ${show ? "show" : null}`}>
        <nav className="nav">
          <div>
            <Link to="/dashboard" onClick={sumagoWebsite} className="nav-logo">
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
                to="/dashboard"
                className="nav-link active"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Dashboard"
              >
                <i className="fas fa-tachometer-alt nav-link-icon"></i>
                <span className="nav-link-name">Dashboard</span>
              </Link>
              <Link
                to="/employee"
                className="nav-link"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Employee's List"
              >
                <i className="fas fa-solid fa-users"></i>
                <span className="nav-link-name">Employee's</span>
              </Link>
              <Link
                to="/leaverequestlist"
                className="nav-link"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Leave Requests List"
              >
                <i className="fas fa-solid fa-user-clock"></i>
                <span className="nav-link-name">Leave Request List</span>
              </Link>
              <Link
                to="/complaint"
                className="nav-link"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Complaint List/Feedbacks"
              >
                <i className="fas fa-solid fa-rectangle-list"></i>
                <span className="nav-link-name">Complaint List</span>
              </Link>
              <Link
                to="/attendence"
                className="nav-link"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Attendence List"
              >
                <i className="fas fa-solid fa-list-check"></i>
                <span className="nav-link-name">Attendence List</span>
              </Link>
              <Link
                to="/salaryslip"
                className="nav-link"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Employee's Salary"
              >
                <i className="fas fa-solid fa-receipt"></i>
                <span className="nav-link-name">Employee's Salary</span>
              </Link>
              <Link
                to="/addadmin"
                className="nav-link"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Add New Admin"
              >
                <i className="fas fa-solid fa-user-plus"></i>
                <span className="nav-link-name">Add New Admin</span>
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
      {/* <Dashboard /> */}
    </main>
  );
};

export default Sidebar;
