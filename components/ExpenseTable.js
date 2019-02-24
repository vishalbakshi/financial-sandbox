import React from "react";
import ExpenseInput from "./ExpenseInput";

class ExpenseTable extends React.Component {
  render() {
    return (
      <div>
        <ExpenseInput />
        <ExpenseInput />
        <ExpenseInput />
        <ExpenseInput />
        <ExpenseInput />
        <ExpenseInput />
        <ExpenseInput />
      </div>
    );
  }
}

module.exports = ExpenseTable;
