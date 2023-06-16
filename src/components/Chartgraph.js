import React, { useState } from "react";
import Chart from "react-apexcharts";

const Chartgraph = () => {
  const [state] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "series-2",
        data: [10, 20, 30, 40, 50, 60, 70, 80],
      },
    ],
  });
  return (
    <div style={{ marginLeft: "2%" }}>
      <div className="row">
        <div className="col-md-6">
          <Chart
            options={state.options}
            series={state.series}
            type="bar"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <Chart
            options={state.options}
            series={state.series}
            type="area"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Chartgraph;
