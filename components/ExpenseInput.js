"use strict";

import React from "react";

class ExpenseInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleExpenseChange = this.handleExpenseChange.bind(this);
  }

  handleExpenseChange(e) {
    this.props.onChange(e.target.value, e.target.getAttribute("id"));
  }
  render() {
    return (
      <div>
        <input
          id={this.props.id}
          placeholder={this.props.expense}
          onChange={this.handleExpenseChange}
        />
      </div>
    );
  }
}

module.exports = ExpenseInput;
