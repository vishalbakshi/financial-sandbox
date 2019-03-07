"use strict";

import React from "react";
import ExpenseInput from "./ExpenseInput";

class ExpenseTable extends React.Component {
  render() {
    const expenses = this.props.expenses;
    const expenseInputs = [];
    const onChange = this.props.onChange;
    expenses.forEach(function(expense, index) {
      expenseInputs.push(
        <ExpenseInput
          key={index}
          id={index}
          expense={expense}
          onChange={onChange}
        />
      );
    });
    return <div>{expenseInputs}</div>;
  }
}

module.exports = ExpenseTable;
