"use strict";

import React from "react";
import GrossMonthlyIncomeDisplay from "./GrossMonthlyIncomeDisplay";
import MultiplierSelector from "./MultiplierSelector";

class GrossMonthlyIncomeCalculator extends React.Component {
  render() {
    return (
      <div>
        <GrossMonthlyIncomeDisplay />
        <MultiplierSelector multiplier={this.props.multiplier} />
      </div>
    );
  }
}

module.exports = GrossMonthlyIncomeCalculator;
