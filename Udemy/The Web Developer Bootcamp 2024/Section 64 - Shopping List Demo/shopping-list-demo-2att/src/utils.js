function rand6() {
  return Math.floor(Math.random() * 6) + 1;
}

function getRoll(num) {
  return Array.from({ length: num }, () => rand6());
}

function sum(dice) {
  return dice.reduce((acc, curr) => acc + curr);
}

function lessThan4(dice) {
  return sum(dice) < 4;
}
function allSame(dice) {
  return dice.every((v) => v === dice[0]);
}

const calculate = (expression) => {
  const notation = expression.split(" ");

  function evaluate(notation) {
    let result = parseFloat(notation[0]);
    let currentOperator = null;

    for (let i = 1; i < notation.length; i++) {
      if (!isNaN(notation[i])) {
        const operand = parseFloat(notation[i]);
        if (currentOperator === null) {
          result = operand;
        } else {
          switch (currentOperator) {
            case "+":
              result += operand;
              break;
            case "-":
              result -= operand;
              break;
            case "*":
              result *= operand;
              break;
            case "/":
              result /= operand;
              break;
            default:
              throw new Error("Invalid operator: " + currentOperator);
          }
        }
      } else {
        currentOperator = notation[i];
      }
    }
    return result;
  }
  return evaluate(notation);
};

export { calculate, getRoll, sum, rand6, lessThan4, allSame };
