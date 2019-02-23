# financial-sandbox
The purpose of this repo is to try out different financial JS libraries

## Dinero.js
- docs: <a href="https://sarahdayan.github.io/dinero.js/" target="_blank">https://sarahdayan.github.io/dinero.js/</a>
- Example app from the author: https://frontstuff.io/build-a-shopping-cart-with-vue-and-dinerojs
- Unrelated calculator app which helped me think about how I wanted to handle numerical user inputs: <a href="https://github.com/ahfarmer/calculator" target="_blank">https://github.com/ahfarmer/calculator</a>
- A sick animation using triangles: <a href="https://codepen.io/FelixRilling/pen/qOZwjg" target="_blank">https://codepen.io/FelixRilling/pen/qOZwjg</a>

### React + Dinero.js
I decided to create a React app which displays examples of Dinero.js with some pleasant visuals.

Core Functionality:

- What is the most annoying task to do manually?
  - Perform arithmetic by hand
- What is the next most annoying task to do manually?
  - Update the visualization to match the arithmetic's result

Core Functionality Visual:

<img src="PersonalFinanceAppMockUp.png"/>

Core Functionality Components:

<img src="PersonalFinanceAppComponents.png" />

1. PersonalFinanceVisualization (cyan): contains the entirety of the app
2. TriangleDisplay (hot pink): displays triangles
3. Triangle (black): visual representation currency amount based on user input
4. GrossMonthlyIncomeCalculator (dark green): displays all components related to Gross Monthly Income
5. GrossMonthlyIncomeDisplay (yellow): displays the Gross Monthly Income
6. MultiplierSelector (orange): receives user input
7. ExpenseTable (dark blue): contains ExpenseInput components
8. ExpenseInput (purple): receives user input
