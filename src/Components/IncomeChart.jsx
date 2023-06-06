import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Flex, Heading } from "@chakra-ui/react";
import axios from "axios";

export const IncomeChart = () => {
  let [chartData, setChartData] = useState([]);
  let userId = JSON.parse(localStorage.getItem("tracker_app")).id;

  function getDatasetAtEvent() {
    axios
      .get(`http://localhost:8080/income?userId=${userId}`)
      .then((res) => {
        setChartData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  var salary = [];
  var gifts = [];
  var refunds = [];
  chartData.map((ele) => {
    salary.push(ele.salary);
    gifts.push(ele.gifts);
    refunds.push(ele.refunds);
  });

  const data = {
    labels: ["Salary", "Gift", "Refund"],
    datasets: [
      {
        label: "Salary",
        data: salary,
        borderWidth: 1,
      },
      {
        label: "Gifts",
        data: gifts,
        borderWidth: 1,
      },
      {
        label: "Refund",
        data: refunds,
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
      <Heading>Income Chart</Heading>
      <Flex align="center" justype="center" minH={"100vh"}>
        <Bar style={{ width: "50%" }} data={data} options={options} />
      </Flex>
    </>
  );
};
