"use strict";

import React from "react";

class MultiplierSelector extends React.Component {
  render() {
    return (
      <div>
        <input placeholder={this.props.multiplier} />
      </div>
    );
  }
}

module.exports = MultiplierSelector;
