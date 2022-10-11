import React, { useEffect, useState, useRef } from "react";
import "react-confirm-alert/src/react-confirm-alert.css";
import Chartjs from "chart.js/auto";
import "react-confirm-alert/src/react-confirm-alert.css";
import "@formatjs/intl-datetimeformat/polyfill";
import { useSelector } from "react-redux";
import Costs from "../../pages/Costs";

export default function ChartJs(props) {
  const { data } = props;
  //const costs = useSelector((state) => state.cost);
  /*const orderedData = costs
    .sort((a, b) => a.period.localeCompare(b.period))
    .map((item) => item);*/

  const orderedData = data
    .sort((a, b) => a.period.toString().localeCompare(b.period))
    .map((item) => item);

  /*const listItems2 = orderedData.map((element) =>
    new Date(element.period).toDateString()
  );*/

  //const listItems2 = orderedData.map((element) => element.period.split("T")[0]);
  const listItems2 = orderedData.map(
    (element) => new Date(element.period).toDateString().split("T")[0]
  );

  const listItemsWithoutDuplicates = Array.from(new Set(listItems2));

  const costsItems = data.map((element) => element.costs);
  //const listItems = listItems2.map((d) => <li>{d.toString()}</li>);

  //const periodData = orderedData.map((item) => item.period);

  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  const onChangeChart = (event) => {
    setChartInstance(event.target.value);
  };

  /*const orderedData = costs.map(({ category, costs, period }) => ({
    category,
    costs,
    period,
  }));*/
  /*const orderedData = data.map(({ category, costs, period }) => ({
    category,
    costs,
    period,
  }));*/
  // const orderedData = data.map((item) => item);

  function addData(chart, label, chartData) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
      dataset.data.push(chartData);
    });
    chart.update();
  }

  function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
      dataset.data.pop();
    });
    chart.update();
  }

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, {
        type: "bar",
        data: {
          //labels: orderedData.map((item) => new Date(item.period).getMonth()),
          labels: listItems2,
          /*labels: orderedData.map((item) =>
              new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "long",
                day: "2-digit",
              }).format(item.period)
            ),*/
          datasets: [
            {
              //label: "Food",
              label: console.log("X-axis: " + listItems2),
              /*label: periodData.forEach((element) =>
                console.log(new Date(element))
              ),*/
              data: data.map((item) =>
                item.category === "Food" ? item.costs : "0"
              ),
              backgroundColor: ["#badbc5"],
              hoverBackgroundColor: ["#4da18c"],
              yAxisID: "y",
            },
            {
              label: "Others",
              data: data.map((item) =>
                item.category === "Others" ? item.costs : "0"
              ),
              backgroundColor: ["#e8d4bc"],
              hoverBackgroundColor: ["#b88d3e"],
              yAxisID: "y2",
            },
            {
              label: "Veterinary",
              //data: orderedData.map((item) =>
              data: data.map((item) =>
                item.category === "Veterinary" ? item.costs : "0"
              ),
              backgroundColor: ["#ff9496"],
              hoverBackgroundColor: ["#f55b6a"],
              yAxisID: "y3",
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: true,
              labels: {
                color: "#495057",
              },
            },
          },
          //scale,
          responsive: true,
          maintainAspectRatio: false,
        },
        /*scales: {
          xAxes: {
            type: "time",
            time: {
              unit: "month",
              displayFormats: { month: "MM" },
            },
            display: true,
          },
        },*/
      });
      /*function addData(chart, label, chartData) {
        chart.data.labels.push(label);
        chart.data.datasets.forEach((dataset) => {
          dataset.data.push(chartData);
        });
        chart.update();
      }

      function removeData(chart) {
        chart.data.labels.pop();
        chart.data.datasets.forEach((dataset) => {
          dataset.data.pop();
        });
        chart.update();
      }*/
      setChartInstance(newChartInstance);
      //addData(newChartInstance, listItems2, data.period);
      //removeData(newChartInstance);
    }
    if (typeof window.chartContainer !== "undefined")
      window.chartContainer.destroy();
  }, [chartContainer]);

  return (
    <div>
      <canvas ref={chartContainer} />
    </div>
  );
}
