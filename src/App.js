import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComplaintList from "./components/Complaint/ComplaintList";
import Dashboard from "./components/Dashboard";
import Attendence from "./components/Attendence/AttendenceList";
import AddNewAdmin from "./components/Add/AddNewAdmin";
import SignIn from "./components/Signin/SignIn";
import EmployeeList from "./components/Employees/EmployeeList";
import ForgetPassword from "./components/Forget/ForgetPassword";
import Verify from "./components/Verify/Verify";
import AddNewEmployee from "./userComponent/AddNewEmployee";
import EmployeeDashboard from "./userComponent/EmployeeDashboard";
import EmployeeAttendenceSheet from "./userComponent/EmployeeAttendenceSheet";
import EmployeeComplaintFrom from "./userComponent/EmployeeComplaintFrom";
import EmployeeLeaveRequest from "./userComponent/EmployeeLeaveRequest";
import LeaveRequestList from "./components/Leave/LeaveRequestList";
import FeedbackForm from "./userComponent/FeedbackForm";
import EmployeeSalary from "./components/EmployeeSalary";
import Salaryslip from "./userComponent/Salaryslip";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employee" element={<EmployeeList />} />
        <Route path="/complaint" element={<ComplaintList />} />
        <Route path="/attendence" element={<Attendence />} />
        <Route path="/addadmin" element={<AddNewAdmin />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/forget" element={<ForgetPassword />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/addemployee" element={<AddNewEmployee />} />
        <Route path="/employeeDashboard" element={<EmployeeDashboard />} />
        <Route path="/attendencesheet" element={<EmployeeAttendenceSheet />} />
        <Route
          path="/EmployeeComplaintFrom"
          element={<EmployeeComplaintFrom />}
        />
        <Route path="/leaverequest" element={<EmployeeLeaveRequest />} />
        <Route path="/leaverequestlist" element={<LeaveRequestList />} />
        <Route path="/feedbackform" element={<FeedbackForm />} />
        <Route path="/salaryslip" element={<EmployeeSalary />} />
        <Route path="/employeesalaryslip" element={<Salaryslip />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
