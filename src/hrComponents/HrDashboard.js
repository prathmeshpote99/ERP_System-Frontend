import React, { useState } from "react";
import HrSidebar from "./HrSidebar"
import Chartgraph from "../components/Chartgraph";
import EmployeeCounter from "../userComponent/EmployeeCounter";

const HrDashboard = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div>
        <div className="col-2">
          <HrSidebar show={show} setShow={setShow} />
        </div>
      </div>
      <div
        id="root"
        className={!show ? "col-9" : "col-10"}
        style={{ overflow: "hidden", marginLeft: "15%" }}
      >
        <EmployeeCounter />
        <Chartgraph />
      </div>
    </>
  );
};

export default HrDashboard;
