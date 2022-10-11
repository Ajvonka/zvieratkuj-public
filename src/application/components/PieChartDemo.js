import React from "react";
import { Chart } from "primereact/chart";
import { useSelector } from "react-redux";

export default function PieChartDemo(props) {
  const { food, others, veterinary } = props;
  const costs = useSelector((state) => state.cost);

  let totalFoodItems = [];
  let totalOtherItems = [];
  let totalVeterinaryItems = [];

  /*const foodItems = costs.map((item) =>
    item.category === "Food" ? item.costs : 0
  );
  const otherItems = costs.map((item) =>
    item.category === "Others" ? item.costs : 0
  );
  const veterinaryItems = costs.map((item) =>
    item.category === "Veterinary" ? item.costs : 0
  );*/

  if(costs.length = 0) {
  const totalFoodItems = costs
    .map((item) => parseInt(item.food))
    .reduce((a, b) => {
      return a + b;
    });

  const totalOtherItems = costs
    .map((item) => parseInt(item.others))
    .reduce((a, b) => {
      return a + b;
    });

  const totalVeterinaryItems = costs
    .map((item) => parseInt(item.veterinary))
    .reduce((a, b) => {
      return a + b;
    });
  }

  const chartData = {
    labels: ["Food", "Others", "Veterinary"],
    datasets: [
      {
        //data: [totalFoodItems, totalOtherItems, totalVeterinaryItems],
        data: [food, others, veterinary],
        backgroundColor: ["#badbc5", "#e8d4bc", "#ff9496"],
        hoverBackgroundColor: ["#4da18c", "#b88d3e", "#f55b6a"],
      },
    ],
  };

  const lightOptions = {
    plugins: {
      legend: {
        labels: {
          color: "#495057",
          boxWidth: 10,
        },
        position: "left",
      },
    },
  };

  return (
    <>
      <div className="pieChart" /*className="card p-d-flex p-jc-center"*/>
        <Chart
          type="pie"
          data={chartData}
          options={lightOptions}
          //style={{ /*position: "center",*/ width: "50%", marginLeft: "200px" }}
        />
      </div>
    </>
  );
}
