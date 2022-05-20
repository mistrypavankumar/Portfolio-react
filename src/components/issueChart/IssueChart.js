import React, { Component } from "react";
import { Fade } from "react-reveal";
import "./IssueChart.css";
import IssueData from "../../shared/opensource/issues.json";
import DonutChart from "react-donut-chart";

class IssueChart extends Component {
  render() {
    const data = [
      {
        label: "Open",
        value: IssueData["open"],
      },
      {
        label: "Close",
        value: IssueData["closed"],
      },
    ];

    return (
      <div class="issue-chart">
        <Fade bottom duration={2000} distance="20px">
          <h2 className="issue-chart-header">Issue Distribution</h2>
        </Fade>
        <DonutChart
          legend={false}
          data={data}
          strokeColor={false}
          colors={["#28a745", "#d73a49"]}
          height={400}
          width={400}
        />
        ;
      </div>
    );
  }
}

export default IssueChart;
