import React, { Component } from "react";
import DonutChart from "react-donut-chart";

import { Fade } from "react-reveal";
import "./PullRequestChart.css";
import PullRequestData from "../../shared/opensource/pull_requests.json";

class PullRequestChart extends Component {
  render() {
    const data = [
      {
        label: "Open",
        value: PullRequestData["open"],
      },
      {
        label: "Merged",
        value: PullRequestData["merged"],
      },
      {
        label: "Close",
        value: PullRequestData["closed"],
      },
    ];

    return (
      <div class="pr-chart">
        <Fade bottom duration={2000} distance="20px">
          <h2 className="pr-chart-header">Pull Request Distribution</h2>
        </Fade>
        <DonutChart
          legend={false}
          height={400}
          width={400}
          strokeColor={false}
          data={data}
          colors={["#28a745", "#6f42c1", "#d73a49"]}
        />
      </div>
    );
  }
}

export default PullRequestChart;
