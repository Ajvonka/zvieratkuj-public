import React from "react";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Chart } from "primereact/chart";
import "react-confirm-alert/src/react-confirm-alert.css";
import "@formatjs/intl-datetimeformat/polyfill";

import moment from "moment";

export default function ChartJsTestVersion(props) {
  const { data } = props;
  const orderedData = data.sort(
    (a, b) => moment(a.period).valueOf() - moment(b.period).valueOf()
  );
  const listItems2 = orderedData.map((element) =>
    moment(element.period).format("MM-DD-YYYY")
  );

  const chartData = {
    labels: listItems2,
    datasets: [
      {
        label: "Food",
        //yAxisID: "A",
        data: data.map((item) => item.food),
        backgroundColor: ["#badbc5"],
        hoverBackgroundColor: ["#4da18c"],
      },
      {
        label: "Others",
        data: data.map((item) => item.others),
        backgroundColor: ["#e8d4bc"],
        hoverBackgroundColor: ["#b88d3e"],
      },
      {
        label: "Veterinary",
        data: data.map((item) => item.veterinary),
        backgroundColor: ["#ff9496"],
        hoverBackgroundColor: ["#f55b6a"],
      },
    ],
  };

  const lightOptions = {
    plugins: {
      legend: {
        labels: {
          color: "#495057",
        },
      },
    },
  };

  return (
    <>
      <div>
        <Chart type="bar" data={chartData} options={lightOptions} />
      </div>
    </>
  );
}
