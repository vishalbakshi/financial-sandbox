"use strict";

import React from "react";
import GrossMonthlyIncomeDisplay from "./GrossMonthlyIncomeDisplay";
import MultiplierSelector from "./MultiplierSelector";

class GrossMonthlyIncomeCalculator extends React.Component {
  render() {
    const sumExpenses = this.props.expenses.reduce(function(acc, curr) {
      return acc + curr;
    });
    const grossMonthlyIncome = this.props.multiplier * sumExpenses;
    return (
      <div>
        <GrossMonthlyIncomeDisplay grossMonthlyIncome={grossMonthlyIncome} />
        <MultiplierSelector
          multiplier={this.props.multiplier}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

module.exports = GrossMonthlyIncomeCalculator;
