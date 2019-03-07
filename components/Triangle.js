"use strict";

import React from "react";

class Triangle extends React.Component {
  render() {
    return (
      <div>
        <svg>
          <polygon points="0,100 100,100 50,10" />
        </svg>
      </div>
    );
  }
}

module.exports = Triangle;
