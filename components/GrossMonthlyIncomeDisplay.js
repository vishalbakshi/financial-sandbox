"use strict";

import React from "react";

class GrossMonthlyIncomeDisplay extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.grossMonthlyIncome}</p>
      </div>
    );
  }
}

module.exports = GrossMonthlyIncomeDisplay;
