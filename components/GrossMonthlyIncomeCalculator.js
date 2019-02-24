import React from "react";
import GrossMonthlyIncomeDisplay from "./GrossMonthlyIncomeDisplay";
import Multiplier from "./MultiplierSelector";

class GrossMonthlyIncomeCalculator extends React.Component {
  render() {
    return (
      <div>
        <GrossMonthlyIncomeDisplay />
        <Multiplier />
      </div>
    );
  }
}

module.exports = GrossMonthlyIncomeCalculator;
