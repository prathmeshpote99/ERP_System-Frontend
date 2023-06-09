import React, { useState } from "react";
import "./EmployeeCounter.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const EmployeeCounter = () => {
  const [counterOn, setcounterOn] = useState(false);
  return (
    <>
      <ScrollTrigger
        onEnter={() => setcounterOn(true)}
        onExit={() => setcounterOn(false)}
      >
        <div className="container">
          <div className="row">
            {/* <div className="col-md-3 col-sm-6">
              <div className="counter">
                <div className="counter-icon">
                  <i className="fa-solid fa-coins"></i>
                </div>
                <div className="counter-content">
                  <h3>EARNING (MONTHLY)</h3>
                  <span className="counter-value">
                    {counterOn && (
                      <CountUp start={0} end={40000} duration={2} delay={0} />
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="counter gray">
                <div className="counter-icon">
                  <i className="fa-solid fa-coins"></i>
                </div>
                <div className="counter-content">
                  <h3>EARNING (ANNUAL)</h3>
                  <span className="counter-value">
                    {counterOn && (
                      <CountUp start={0} end={500000} duration={2} delay={0} />
                    )}
                  </span>
                </div>
              </div>
            </div> */}
            <div className="col-md-6 col-sm-6">
              <div className="counters blue">
                <div className="counter-icon">
                  <i className="fa-solid fa-user-tie"></i>
                </div>
                <div className="counter-content">
                  <h3>TOTAL EMPLOYEE'S</h3>
                  <span className="counter-value">
                    {counterOn && (
                      <CountUp start={0} end={40} duration={2} delay={0} />
                    )}
                    +
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="counters red">
                <div className="counter-icon">
                  <i className="fa-solid fa-diagram-project"></i>
                </div>
                <div className="counter-content">
                  <h3>PROJECT</h3>
                  <span className="counter-value">
                    {counterOn && (
                      <CountUp start={0} end={256} duration={2} delay={0} />
                    )}
                    +
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
};

export default EmployeeCounter;
