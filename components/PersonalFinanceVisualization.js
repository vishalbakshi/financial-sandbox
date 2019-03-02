import React from "react";
import TriangleDisplay from "./TriangleDisplay";
import GrossMonthlyIncomeCalculator from "./GrossMonthlyIncomeCalculator";
import ExpenseTable from "./ExpenseTable";

class PersonalFinanceVisualization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [],
      multiplier: 1
    };
  }
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
