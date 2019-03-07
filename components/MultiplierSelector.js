"use strict";

import React from "react";

class MultiplierSelector extends React.Component {
  constructor(props) {
    super(props);
    this.handleMultiplierChange = this.handleMultiplierChange.bind(this);
  }

  handleMultiplierChange(e) {
    this.props.onChange(e.target.value);
  }
  render() {
    return (
      <div>
        <input
          placeholder={this.props.multiplier}
          onChange={this.handleMultiplierChange}
        />
      </div>
    );
  }
}

module.exports = MultiplierSelector;
