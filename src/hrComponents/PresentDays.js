import React, { useState } from "react";
import HrSidebar from "./HrSidebar";

const PresentDays = () => {
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
      ></div>
    </>
  );
};

export default PresentDays;
