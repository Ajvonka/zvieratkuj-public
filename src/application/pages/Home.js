import React, { useState } from "react";
import "../../application/App.css";
import "../../styles/Home/Home.css";

import { useSelector } from "react-redux";
import Controls from "../components/controls/Controls";
import PieChartDemo from "../components/PieChartDemo";
import moment from "moment";
import TodoWomen from "../images/todo-women.png";
import { removeSelectedTask } from "../redux/actions/taskAction";
import * as taskService from "../services/taskService";
import { useDispatch } from "react-redux";

function Home() {
  const costs = useSelector((state) => state.cost);
  const pets = useSelector((state) => state.pet);
  const tasks = useSelector((state) => state.task);
  const [records, setRecords] = useState(taskService.getAllTasks());

  const matias = [];
  const ariel = [];
  const atmega = [];

  let foodCostsMonth = [];
  let otherCostsMonth = [];
  let veterinaryCostsMonth = [];
  let totalCostsMonth = [];
  let foodCostsYear = [];
  let otherCostsYear = [];
  let veterinaryCostsYear = [];
  let totalCostsYear = [];
  let totalFoodCost = [];
  let totalOthersCost = [];
  let totalVeterinaryCost = [];
  let costsTotal = [];


  /*const sortedPets = console.log(
    "Sorted dataxxxx: " +
      pets
        .sort(
          (a, b) =>
            moment(b.psinka) - moment(a.psinka) ||
            moment(b.hepa) - moment(a.hepa) ||
            moment(b.parvo) - moment(a.parvo) ||
            moment(b.lepto) - moment(a.lepto) ||
            moment(b.rabies) - moment(a.rabies) ||
            moment(b.deworming) - moment(a.deworming)
        )
        .map((item) => item.name)
  );*/

    const sortedPets = console.log('Sorted data: ', pets);

   pets.map((item) =>
    item.name === "Matias"
      ? matias.push(
          moment(item.canineDistemper, "MM-DD-YYYY")
            .add(1, "y")
            .format("MM-DD-YYYY"),
          moment(item.hepa, "MM-DD-YYYY").add(1, "y").format("MM-DD-YYYY"),
          moment(item.parvo, "MM-DD-YYYY").add(1, "y").format("MM-DD-YYYY"),
          moment(item.lepto, "MM-DD-YYYY").add(1, "y").format("MM-DD-YYYY"),
          moment(item.rabies, "MM-DD-YYYY").add(1, "y").format("MM-DD-YYYY"),
          moment(item.deworming, "MM-DD-YYYY").add(1, "y").format("MM-DD-YYYY")
        )
      : 0
  );
  pets.map((item) =>
    item.name === "Ariel"
      ? ariel.push(
          moment(item.canineDistemper, "MM-DD-YYYY")
            .add(1, "y")
            .format("MM-DD-YYYY"),
          moment(item.hepa, "MM-DD-YYYY").add(1, "y").format("MM-DD-YYYY"),
          moment(item.parvo, "MM-DD-YYYY").add(1, "y").format("MM-DD-YYYY"),
          moment(item.lepto, "MM-DD-YYYY").add(1, "y").format("MM-DD-YYYY"),
          moment(item.rabies, "MM-DD-YYYY").add(1, "y").format("MM-DD-YYYY"),
          moment(item.deworming, "MM-DD-YYYY").add(1, "y").format("MM-DD-YYYY")
        )
      : 0
  );
  pets.map((item) =>
    item.name === "Atmega"
      ? atmega.push(
          moment(item.canineDistemper, "MM-DD-YYYY")
            .add(1, "y")
            .format("MM-DD-YYYY"),
          moment(item.hepa, "MM-DD-YYYY").add(1, "y").format("MM-DD-YYYY"),
          moment(item.parvo, "MM-DD-YYYY").add(1, "y").format("MM-DD-YYYY"),
          moment(item.lepto, "MM-DD-YYYY").add(1, "y").format("MM-DD-YYYY"),
          moment(item.rabies, "MM-DD-YYYY").add(1, "y").format("MM-DD-YYYY"),
          moment(item.deworming, "MM-DD-YYYY").add(1, "y").format("MM-DD-YYYY")
        )
      : 0
  );

  const matiasData = [
    {
      name: "Canine distemper ",
      date: matias[0],
    },
    {
      name: "Hepatitis ",
      date: matias[1],
    },
    {
      name: "Parvovirose ",
      date: matias[2],
    },
    {
      name: "Leptospirosis ",
      date: matias[3],
    },
    {
      name: "Rabies ",
      date: matias[4],
    },
    {
      name: "Deworming ",
      date: matias[5],
    },
  ];

 const arielData = [
    {
      name: "Canine distemper ",
      date: ariel[0],
    },
    {
      name: "Hepatitis ",
      date: ariel[1],
    },
    {
      name: "Parvovirose ",
      date: ariel[2],
    },
    {
      name: "Leptospirosis ",
      date: ariel[3],
    },
    {
      name: "Rabies ",
      date: ariel[4],
    },
    {
      name: "Deworming ",
      date: ariel[5],
    },
  ];

  const atmegaData = [
    {
      name: "Canine distemper ",
      date: atmega[0],
    },
    {
      name: "Hepatitis ",
      date: atmega[1],
    },
    {
      name: "Parvovirose ",
      date: atmega[2],
    },
    {
      name: "Leptospirosis ",
      date: atmega[3],
    },
    {
      name: "Rabies ",
      date: atmega[4],
    },
    {
      name: "Deworming ",
      date: atmega[5],
    },
  ];

  const startOfWeek = moment()
    .clone()
    .startOf("week")
    .isoWeekday("Sunday")
    .format("MM-DD-YYYY");
  const endOfWeek = moment()
    .endOf("week")
    .isoWeekday("Sunday")
    .format("MM-DD-YYYY");

  const startOfMonth = moment().startOf("month").format("MM-DD-YYYY");
  const endOfMonth = moment().endOf("month").format("MM-DD-YYYY");
  const startOfYear = moment().startOf("year").format("MM-DD-YYYY");
  const endOfYear = moment().endOf("year").format("MM-DD-YYYY");

  const MatiasList = () => {
    let calendarColor = "";
    let dateColor = "";
    let titleColor = "";

    return matiasData
      .filter((item) =>
        moment(item.date).isBetween(startOfMonth, endOfMonth, undefined, "[]")
      )
      .sort((a, b) => moment(a.date).valueOf() - moment(b.date).valueOf())
      .map((d) => {
        if (
          moment(d.date).isBetween(startOfWeek, endOfWeek, undefined, "[]") &&
          moment(d.date).isAfter(moment())
        ) {
          calendarColor = "orange";
          dateColor = "orange-date";
          titleColor = "#E9A149";
        }
        if (moment(d.date).isBefore(moment())) {
          calendarColor = "red";
          dateColor = "red-date";
          titleColor = "#E93939";
        }
        if (moment(d.date).isAfter(endOfWeek)) {
          calendarColor = "blue";
          dateColor = "blue-date";
          titleColor = "#677b7e";
        }

        return (
          <div className={`calendarIcon ${calendarColor}`}>
            <div className={`date ${dateColor}`}>
              <p style={{ color: `${titleColor}` }}>{d.date}</p>
            </div>
            <div className="appointment">
              <p>{d.name}</p>
            </div>
          </div>
        );
      });
  };

  const arielList = () => {
    let calendarColor = "";
    let dateColor = "";
    let titleColor = "";

    return arielData
      .filter((item) =>
        moment(item.date).isBetween(startOfMonth, endOfMonth, undefined, "[]")
      )
      .sort((a, b) => moment(a.date).valueOf() - moment(b.date).valueOf())
      .map((d) => {
        if (
          moment(d.date).isBetween(startOfWeek, endOfWeek, undefined, "[]") &&
          moment(d.date).isAfter(moment())
        ) {
          calendarColor = "orange";
          dateColor = "orange-date";
          titleColor = "#E9A149";
        }
        if (moment(d.date).isBefore(moment())) {
          calendarColor = "red";
          dateColor = "red-date";
          titleColor = "#E93939";
        }
        if (moment(d.date).isAfter(endOfWeek)) {
          calendarColor = "blue";
          dateColor = "blue-date";
          titleColor = "#677b7e";
        }

        return (
          <div className={`calendarIcon ${calendarColor}`}>
            <div className={`date ${dateColor}`}>
              <p style={{ color: `${titleColor}` }}>{d.date}</p>
            </div>
            <div className="appointment">
              <p>{d.name}</p>
            </div>
          </div>
        );
      });
  };

  const atmegaList = () => {
    let calendarColor = "";
    let dateColor = "";
    let titleColor = "";

    return atmegaData
      .filter((item) =>
        moment(item.date).isBetween(startOfMonth, endOfMonth, undefined, "[]")
      )
      .sort((a, b) => moment(a.date).valueOf() - moment(b.date).valueOf())
      .map((d) => {
        if (
          moment(d.date).isBetween(startOfWeek, endOfWeek, undefined, "[]") &&
          moment(d.date).isAfter(moment())
        ) {
          calendarColor = "orange";
          dateColor = "orange-date";
          titleColor = "#E9A149";
        }
        if (moment(d.date).isBefore(moment())) {
          calendarColor = "red";
          dateColor = "red-date";
          titleColor = "#E93939";
        }
        if (moment(d.date).isAfter(endOfWeek)) {
          calendarColor = "blue";
          dateColor = "blue-date";
          titleColor = "#677b7e";
        }

        return (
          <div className={`calendarIcon ${calendarColor}`}>
            <div className={`date ${dateColor}`}>
              <p style={{ color: `${titleColor}` }}>{d.date}</p>
            </div>
            <div className="appointment">
              <p>{d.name}</p>
            </div>
          </div>
        );
      });
  };

  const Todos = () => {
    let calendarColor = "";
    let dateColor = "";
    let titleColor = "";

    return tasks
      .sort((a, b) => moment(a.todo).valueOf() - moment(b.todo).valueOf())
      .map((d, index) => {
        if (
          moment(d.todo).isBetween(startOfWeek, endOfWeek, undefined, "[]") &&
          moment(d.todo).isAfter(moment())
        ) {
          calendarColor = "orange";
          titleColor = "#E9A149";
        }
        if (moment(d.todo).isBefore(moment())) {
          calendarColor = "red";
          titleColor = "#E93939";
        }
        if (moment(d.todo).isAfter(endOfWeek)) {
          calendarColor = "blue";
          titleColor = "#677b7e";
        }

        return (
          <>
            <div key={d.id} className="todo-item">
              <ul>
                <div key={d.id} className={`calendarIcon ${calendarColor}`}>
                  <div className={`date ${dateColor}`}>
                    <p style={{ color: `${titleColor}` }}>{d.todo}</p>
                  </div>
                  <div className="appointment">
                    <p>{d.task}</p>
                  </div>
                </div>
              </ul>
            </div>
            <div className="action">
              <Controls.Button
                text="Done"
                onClick={() => {
                  remove(d.id);
                }}
              />
            </div>
          </>
        );
      });
  };

  const dispatch = useDispatch();

  const remove = (employee) => {
    dispatch(removeSelectedTask(employee));
    setRecords(taskService.getAllTasks());
  };


  if(costs.length = 0) {
  const costsMonth = costs
    .filter((item) =>
      moment(item.period).isBetween(startOfMonth, endOfMonth, undefined, "[]")
    )
    .map((filteredItems) => filteredItems);

  const costsYear = costs
    .filter((item) =>
      moment(item.period).isBetween(startOfYear, endOfYear, undefined, "[]")
    )
    .map((filteredItems) => filteredItems);

  const foodCostsMonth = costsMonth
    .map((item) => parseInt(item.food))
    .reduce((a, b) => {
      return a + b;
    });

  const otherCostsMonth = costsMonth
    .map((item) => parseInt(item.others))
    .reduce((a, b) => {
      return a + b;
    });

  const veterinaryCostsMonth = costsMonth
    .map((item) => parseInt(item.veterinary))
    .reduce((a, b) => {
      return a + b;
    });

  const foodCostsYear = costsYear
    .map((item) => parseInt(item.food))
    .reduce((a, b) => {
      return a + b;
    });

  const otherCostsYear = costsYear
    .map((item) => parseInt(item.others))
    .reduce((a, b) => {
      return a + b;
    });

  const veterinaryCostsYear = costsYear
    .map((item) => parseInt(item.veterinary))
    .reduce((a, b) => {
      return a + b;
    });

  const totalFoodCost = costs
    .map((item) => parseInt(item.food))
    .reduce((a, b) => {
      return a + b;
    });

  const totalOthersCost = costs
    .map((item) => parseInt(item.others))
    .reduce((a, b) => {
      return a + b;
    });

  const totalVeterinaryCost = costs
    .map((item) => parseInt(item.veterinary))
    .reduce((a, b) => {
      return a + b;
    });

  const totalCostsMonth =
    foodCostsMonth + otherCostsMonth + veterinaryCostsMonth;

  const totalCostsYear = foodCostsYear + otherCostsYear + veterinaryCostsYear;

  const costsTotal = totalFoodCost + totalOthersCost + totalVeterinaryCost;

  }

  return (
    <>
      <section className="dashboard-section-costs">
        <div className="dashboard-title">
          <h2>Total costs</h2>
        </div>

        <div className="costs-items">
          <div className="cost-item">
            <PieChartDemo
              food={foodCostsMonth}
              others={otherCostsMonth}
              veterinary={veterinaryCostsMonth}
            />
            <p>Costs/month: {totalCostsMonth} € </p>
          </div>
          <div className="cost-item">
            <PieChartDemo
              food={foodCostsYear}
              others={otherCostsYear}
              veterinary={veterinaryCostsYear}
            />
            <p>Costs/year: {totalCostsYear} €</p>
          </div>
          <div className="cost-item">
            <PieChartDemo
              food={totalFoodCost}
              others={totalOthersCost}
              veterinary={totalVeterinaryCost}
            />
            <p>Total costs: {costsTotal} €</p>
          </div>
        </div>
      </section>

      <section className="dashboard-section-appointments">
        <div className="dashboard-title">
          <h2>Next appointments in {moment().format("MMMM")}</h2>
        </div>
        <div className="appointment-items">
          <div className="appointment-item">
            <div className="appointment-title">
              <p>Atmega</p>
            </div>
            <div className="appointment-body">
              <ul>{atmegaList()}</ul>
            </div>
          </div>
          <div className="appointment-item">
            <div className="appointment-title">
              <p>Ariel</p>
            </div>
            <div className="appointment-body">
              <ul>{arielList()}</ul>
            </div>
          </div>

          <div className="appointment-item">
            <div className="appointment-title">
              <p>Matias</p>
            </div>
            <div className="appointment-body">
              <ul>
                <MatiasList />
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="dashboard-section-todos">
        <div className="dashboard-title">
          <h2 style={{ marginTop: "30px" }}>TODOs</h2>
        </div>
        <div className="todos-items">
          <div className="todo-component">
            <Todos />
          </div>
          <div className="todoWomen">
            <img id="todoWomen" src={TodoWomen} alt="TODO"></img>
            {sortedPets}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
