import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Flex, Heading } from "@chakra-ui/react";
import axios from "axios";

export const ExpenseChart = () => {
  let [chartData, setChartData] = useState([]);
  let userId = JSON.parse(localStorage.getItem("tracker_app")).id;

  function getDatasetAtEvent() {
    axios
      .get(`http://localhost:8080/expense?userId=${userId}`)
      .then((res) => {
        setChartData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  var food_drink = [];
  var shopping = [];
  var housing = [];
  var bills = [];
  var vehicle_transport = [];
  var lifestyle = [];

  chartData.map((ele) => {
    food_drink.push(ele.food_drink);
    shopping.push(ele.shopping);
    housing.push(ele.housing);
    bills.push(ele.bills);
    vehicle_transport.push(ele.vehicle_transport);
    lifestyle.push(ele.lifestyle);
  });

  const data = {
    labels: [
      "Food & Drink",
      "Shopping",
      "Housing",
      "Bills",
      "Vehicle & Transport",
      "Lifestyle",
    ],
    datasets: [
      {
        label: "Food & Drink",
        data: food_drink,
        borderWidth: 1,
      },
      {
        label: "shopping",
        data: shopping,
        borderWidth: 1,
      },
      {
        label: "Housing",
        data: housing,
        borderWidth: 1,
      },
      {
        label: "Bills",
        data: bills,
        borderWidth: 1,
      },
      {
        label: "Vehicle & Transport",
        data: vehicle_transport,
        borderWidth: 1,
      },
      {
        label: "Lifestyle",
        data: lifestyle,
        borderWidth: 1,
      },
    ],
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  useEffect(() => {
    getDatasetAtEvent();
  }, []);

  return (
    <>
      <Heading>Expense Chart</Heading>
      <Flex align="center" justype="center" minH={"100vh"}>
        <Bar style={{ width: "50%" }} data={data} options={options} />
      </Flex>
    </>
  );
};
