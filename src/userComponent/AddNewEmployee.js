import React, { useState } from "react";
import "../userComponent/AddNewEmployee.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddNewEmployee = () => {
  const [isValid, setIsValid] = useState(true);
  const [password, setPassword] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [city, setCity] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState();

  const navigate = useNavigate();

  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const ageRegex = /\d+\s\d+/;

  const handleChangePwd = (event) => {
    const { value } = event.target;
    setPassword(value);
    setIsValid(passwordRegex.test(value));
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setAge(value);
    setIsValid(ageRegex.test(value));
    const inputValue = event.target.value.replace(/\D/g, "");
    setAge(inputValue.slice(0, 2));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let newData = {
      fName: fName,
      lName: lName,
      age: age,
      city: city,
      jobTitle: jobTitle,
      email: email,
      password: password,
      userType: "User",
    };
    axios
      .post("http://localhost:7080/user/add", newData)
      .then((res) => {
        console.log(res.data);
        navigate("/");
        alert(`Welcome to the team! ${fName}`);
      })
      .catch((err) => console.log(err));
    if (isValid) {
    }
  };

  return (
    <>
      <div>
        {/* <div className="row">
        <div className="col-4">
          <Sidebar show={show} setShow={setShow} />
        </div>
      </div> */}
        <div className="wrapper1 mt-5">
          {/* <div className="logo">
          <img className="logo1" src={logo} alt="" />
        </div> */}
          <div className="text-center mt-4 name">ADD NEW EMPLOYEE</div>
          <form className="p-3" onSubmit={onSubmit}>
            {/* <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="Username"
              required
            />
          </div> */}
            <div className="form-field d-flex align-items-center">
              <span className="fa-solid fa-user"></span>
              <input
                type="text"
                name="FirstName"
                id="FirstName"
                required
                placeholder="First Name"
                value={fName}
                onChange={(e) => setFName(e.target.value)}
              />
            </div>
            <div className="form-field d-flex align-items-center">
              <span className="fa-solid fa-user"></span>
              <input
                type="text"
                name="LastName"
                id="LastName"
                required
                placeholder="Last Name"
                value={lName}
                onChange={(e) => setLName(e.target.value)}
              />
            </div>
            <div className="form-field d-flex align-items-center">
              <span className="fa-solid fa-child fa-xl"></span>
              <input
                type="number"
                name="age"
                id="age"
                required
                value={age}
                onChange={handleChange}
                placeholder="Age"
              />
            </div>
            <div className="form-field d-flex align-items-center">
              <span className="fa-solid fa-city fa-sm"></span>
              <i className="fa-solid"></i>
              <input
                type="text"
                name="city"
                required
                id="city"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="form-field d-flex align-items-center">
              <span className="fa-solid fa-briefcase fa-sm"></span>
              <input
                type="text"
                name="jobTitle"
                required
                id="jobtitile"
                placeholder="Job Title"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </div>
            <div className="form-field d-flex align-items-center">
              <span className="fa-solid fa-envelope"></span>
              <input
                type="email"
                name="Email"
                id="Email"
                required
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-field d-flex align-items-center">
              <span className="fa-solid fa-key"></span>
              <input
                type="password"
                name="password"
                id="pwd"
                required
                value={password}
                onChange={handleChangePwd}
                placeholder="Password"
              />
            </div>
            {!isValid && (
              <p style={{ color: "red" }}>
                Password must be at least 8 characters long and contain at least
                one uppercase letter, one lowercase letter, and one digit.
              </p>
            )}
            <button type="submit" className="btn mt-3">
              Add Me
            </button>
          </form>
          {/* <div className="text-center fs-6">
          <Link to="/">Forget password?</Link> or <Link to="/">Sign up</Link>
        </div> */}
        </div>
      </div>
    </>
  );
};

export default AddNewEmployee;
