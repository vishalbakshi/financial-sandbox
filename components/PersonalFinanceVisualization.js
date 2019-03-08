"use strict";

import React from "react";
import TriangleDisplay from "./TriangleDisplay";
import GrossMonthlyIncomeCalculator from "./GrossMonthlyIncomeCalculator";
import ExpenseTable from "./ExpenseTable";

class PersonalFinanceVisualization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      multiplier: 1.0
    };
    this.handleExpenseChange = this.handleExpenseChange.bind(this);
    this.handleMultiplierChange = this.handleMultiplierChange.bind(this);
  }

  handleExpenseChange(expense, index) {
    this.setState({
      expenses: this.state.expenses.map(function(el, idx) {
        if (idx == index) {
          return Number(expense);
        } else {
          return el;
        }
      })
    });
  }

  handleMultiplierChange(multiplier) {
    this.setState({
      multiplier: multiplier
    });
  }

  render() {
    return (
      <div>
        <TriangleDisplay expenses={this.state.expenses} />
        <GrossMonthlyIncomeCalculator
          expenses={this.state.expenses}
          multiplier={this.state.multiplier}
          onChange={this.handleMultiplierChange}
        />
        <ExpenseTable
          onChange={this.handleExpenseChange}
          expenses={this.state.expenses}
        />
      </div>
    );
  }
}

module.exports = PersonalFinanceVisualization;
