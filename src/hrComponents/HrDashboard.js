import React, { useState } from "react";
import HrSidebar from "./HrSidebar";
import Chartgraph from "../components/Chartgraph";
import Counter from "../components/Counters/Counter";

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
        <Counter />
        <Chartgraph />
      </div>
    </>
  );
};

export default HrDashboard;
