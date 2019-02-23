import React from "react";
import TriangleDisplay from "./TriangleDisplay";
import GrossMonthlyIncomeCalculator from "./GrossMonthlyIncomeCalculator";
import ExpenseTable from "./ExpenseTable";

class PersonalFinanceVisualization extends React.Component {
  render() {
    return (
      <div>
        <TriangleDisplay />
        <GrossMonthlyIncomeCalculator />
        <ExpenseTable />
      </div>
    );
  }
}

module.exports = PersonalFinanceVisualization;
