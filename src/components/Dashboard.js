import React, { useState } from "react";
import Chartgraph from "./Chartgraph";
import Counter from "./Counters/Counter";
import Sidebar from "./Sidebar/Sidebar";

const Dashboard = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div>
        <div className="col-2">
          <Sidebar show={show} setShow={setShow} />
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

export default Dashboard;
