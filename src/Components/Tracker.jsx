import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { IncomeChart } from "./IncomeChart";
import { ExpenseChart } from "./ExpenseChart";

let incomeData = {
  salary: "",
  gifts: "",
  refunds: "",
  other: "",
  amount: "",
  date: "",
  amount: "",
  date: "",
};
let expenseData = {
  food_drink: "",
  shopping: "",
  housing: "",
  bills: "",
  vehicle_transport: "",
  lifestyle: "",
  amount: "",
  date: "",
};
export const Tracker = () => {
  const [type, setType] = useState("income");
  let [incData, setIncData] = useState(incomeData);
  let [expData, setExpData] = useState(expenseData);
  const { salary, gifts, refunds, other } = incData;
  const {
    food_drink,
    shoppin,
    housing,
    bills,
    vehicle_transport,
    lifestyle,
    amount,
    date,
  } = expData;

  const handleChange = (e) => {
    let val = e.target.value;
    setIncData({ ...incData, [e.target.name]: val });
  };

  const handleChange2 = (e) => {
    let val = e.target.value;
    setExpData({ ...expData, [e.target.name]: val });
  };

  const handleCreate = () => {
    let userId = JSON.parse(localStorage.getItem("tracker_app")).id;
    var url;
    var newData;
    if (type === "income") {
      newData = incData;
      newData.userId = userId;
      url = "http://localhost:8080/income";
    } else {
      newData = expData;
      newData.id = userId;
      url = "http://localhost:8080/expense";
    }

    axios
      .post(url, newData)
      .then((res) => {
        alert("data has been Added");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Flex minH={"100vh"} align={"center"} justify={"center"}>
        <Box
          gap={"40px"}
          width="450px"
          flexDirection={"column"}
          justify={"center"}
          align={"center"}
        >
          {/* <Box gap="20px"> */}
          <Select onChange={(e) => setType(e.target.value)} width={"150px"}>
            <option value="income" selected>
              Income
            </option>
            <option value="expense">Expense</option>
          </Select>

          {type == "income" ? (
            <>
              <FormControl id="email">
                <FormLabel>Salary</FormLabel>
                <Input
                  onChange={(e) => handleChange(e)}
                  name="salary"
                  type="text"
                />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Gift</FormLabel>
                <Input
                  onChange={(e) => handleChange(e)}
                  name="gifts"
                  type="text"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Refunds</FormLabel>
                <Input
                  onChange={(e) => handleChange(e)}
                  name="refunds"
                  type="text"
                />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Other</FormLabel>
                <Input
                  onChange={(e) => handleChange(e)}
                  name="other"
                  type="text"
                />
              </FormControl>
            </>
          ) : (
            <>
              {/*  */}
              <FormControl id="email">
                <FormLabel>Food & Drinks</FormLabel>
                <Input
                  onChange={(e) => handleChange2(e)}
                  name="food_drink"
                  type="text"
                />
              </FormControl>
              {/*  */}
              <FormControl id="email">
                <FormLabel>Shopping</FormLabel>
                <Input
                  onChange={(e) => handleChange2(e)}
                  name="shopping"
                  type="text"
                />
              </FormControl>
              {/*  */}
              <FormControl id="Refunds">
                <FormLabel>Housing</FormLabel>
                <Input
                  onChange={(e) => handleChange2(e)}
                  name="housing"
                  type="text"
                />
              </FormControl>
              {/*  */}
              <FormControl id="email">
                <FormLabel>Bills</FormLabel>
                <Input
                  onChange={(e) => handleChange2(e)}
                  name="bills"
                  type="text"
                />
              </FormControl>
              {/*  */}
              <FormControl id="email">
                <FormLabel>Vehicle & Transport</FormLabel>
                <Input
                  onChange={(e) => handleChange2(e)}
                  name="vehicle_transport"
                  type="text"
                />
              </FormControl>
              {/*  */}
              <FormControl id="email">
                <FormLabel>Lifestyle</FormLabel>
                <Input
                  onChange={(e) => handleChange2(e)}
                  name="lifestyle"
                  type="text"
                />
              </FormControl>
              {/*  */}
            </>
          )}

          <FormControl>
            <FormLabel>Amount</FormLabel>
            <Input
              onChange={(e) => handleChange(e)}
              name="amount"
              type="text"
            />
          </FormControl>
          {/*  */}
          <FormControl>
            <FormLabel>Date</FormLabel>
            <Input onChange={(e) => handleChange(e)} name="date" type="date" />
          </FormControl>
          {/*  */}
          <FormControl>
            <Button
              onClick={handleCreate}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              Create
            </Button>
          </FormControl>
          {/* <Box /> */}
        </Box>
      </Flex>
    </>
  );
};
