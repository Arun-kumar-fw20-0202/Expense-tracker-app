import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import Header from "./Navbar";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import { PrivateRoute } from "./PrivateRoute";
import { IncomeChart } from "./IncomeChart";
import { ExpenseChart } from "./ExpenseChart";

export const AllRoute = () => {
  return (
    <>
      <Routes>
        <Route
          path="/tracker"
          element={
            <>
              <PrivateRoute>
                <Header />
                <Home />
              </PrivateRoute>
            </>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/analytics"
          element={
            <>
              <PrivateRoute>
                <IncomeChart />
                <ExpenseChart />
              </PrivateRoute>
            </>
          }
        />
      </Routes>
    </>
  );
};
