// Bring in the libraries
import React from "react";
import { expect } from "chai";
import { mount } from "enzyme";
import { spy } from "sinon";

// Bring in the components
import PersonalFinanceVisualization from "./PersonalFinanceVisualization";
import TriangleDisplay from "./TriangleDisplay";
import Triangle from "./Triangle";
import GrossMonthlyIncomeCalculator from "./GrossMonthlyIncomeCalculator";
import GrossMonthlyIncomeDisplay from "./GrossMonthlyIncomeDisplay";
import MultiplierSelector from "./MultiplierSelector";
import ExpenseTable from "./ExpenseTable";
import ExpenseInput from "./ExpenseInput";

it("All components are Functions", () => {
  expect(PersonalFinanceVisualization).to.be.a("Function");
  expect(TriangleDisplay).to.be.a("Function");
  expect(Triangle).to.be.a("Function");
  expect(GrossMonthlyIncomeCalculator).to.be.a("Function");
  expect(GrossMonthlyIncomeDisplay).to.be.a("Function");
  expect(MultiplierSelector).to.be.a("Function");
  expect(ExpenseTable).to.be.a("Function");
  expect(ExpenseInput).to.be.a("Function");
});
