import React, { useState } from "react";

const Calculator = () => {
  const [currentDisplay, setCurrentDisplay] = useState("");
  const [outputDisplay, setOutputDisplay] = useState("");
  const [prevOutput, setPrevOutput] = useState(0);
  const [isComputed, setIsComputed] = useState(false);

  const addOperand = (value) => {
    if (isComputed) {
      setCurrentDisplay(value);
      setOutputDisplay(value);
      setIsComputed(false);
      return;
    }
    if (
      (currentDisplay === "" && value === "0") ||
      (currentDisplay === "0" && value === "0")
    ) {
      setCurrentDisplay("0");
      setOutputDisplay(outputDisplay + "0");
      return;
    }
    if (currentDisplay === "0" && value !== "0") {
      setCurrentDisplay(value);
      setOutputDisplay(value);
    }
    setCurrentDisplay(currentDisplay + value);
    setOutputDisplay(outputDisplay + value);
  };

  const addOperator = (operator) => {
    let currentOperand = outputDisplay;
    if (isComputed) {
      currentOperand = prevOutput.toString();
      setIsComputed(false);
    }
    if (currentOperand.slice(currentOperand.length - 1) === "-") {
      if (operator === "-") {
        setOutputDisplay(currentOperand.slice(0, currentOperand.length - 1));
        setCurrentDisplay("");
        return;
      }
      switch (
        currentOperand.slice(
          currentOperand.length - 2,
          currentOperand.length - 1
        )
      ) {
        case "+":
        case "/":
        case "*":
          setOutputDisplay(
            currentOperand.slice(0, currentOperand.length - 2) + operator
          );
          return;
        default:
          break;
      }
    }
    if (operator === "-") {
      if (currentDisplay === "" && currentOperand === "") {
        setOutputDisplay("-");
        setCurrentDisplay("-");
        return;
      }
      switch (currentOperand.slice(currentOperand.length - 1)) {
        case "+":
          setOutputDisplay(currentOperand + operator);
          setCurrentDisplay("-");
          return;
        case "/":
          setOutputDisplay(currentOperand + operator);
          setCurrentDisplay("-");
          return;
        case "*":
          setOutputDisplay(currentOperand + operator);
          setCurrentDisplay("-");
          return;
        default:
          break;
      }
    }
    if (currentOperand === "" || currentOperand === "-") return;
    if (currentDisplay === "") {
      switch (currentOperand.slice(currentOperand.length - 1)) {
        case "-":
        case "+":
        case "/":
        case "*":
          setOutputDisplay(
            currentOperand.slice(0, currentOperand.length - 1) + operator
          );
          return;
        default:
          break;
      }
    }
    if (currentOperand.slice(currentOperand.length - 1) === "-") return;
    setOutputDisplay(currentOperand + operator);
    setCurrentDisplay("");
  };

  const compute = () => {
    setIsComputed(true);
    let computedFormula;
    try {
      switch (outputDisplay) {
        case "":
          computedFormula = "ERROR";
          break;
        default:
          computedFormula = eval(outputDisplay);
      }
    } catch {
      computedFormula = "ERROR";
    }
    if (computedFormula === "ERROR") {
      setCurrentDisplay(computedFormula);
      setOutputDisplay(computedFormula);
      setPrevOutput(0);
      return;
    }
    setCurrentDisplay(computedFormula.toString());
    setOutputDisplay(`${outputDisplay}=${computedFormula}`);
    setPrevOutput(computedFormula);
  };

  const clear = () => {
    setOutputDisplay("");
    setCurrentDisplay("");
    setPrevOutput(0);
  };

  const buttonClick = (input) => {
    switch (input) {
      case "/":
        addOperator("/");
        break;
      case "*":
        addOperator("*");
        break;
      case "-":
        addOperator("-");
        break;
      case "+":
        addOperator("+");
        break;
      case ".":
        if (isComputed) {
          addOperand("0.");
          return;
        }
        if (currentDisplay.includes(".")) break;
        if (currentDisplay === "") {
          addOperand("0.");
          return;
        }
        addOperand(input);
        break;
      case "clear":
        clear();
        break;
      case "=":
        compute();
        break;
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        addOperand(input);
        break;
      default:
        return;
    }
  };
  return (
    <div className="calculator-container">
      <div className="displays-container">
        <div className="output-display">{outputDisplay}</div>
        <div className="input-display" id="display">
          {(currentDisplay === "") & (outputDisplay === "")
            ? "0"
            : currentDisplay}
        </div>
      </div>
      <div className="buttons-container">
        <button
          className="clearBtn btn"
          id="clear"
          onClick={() => buttonClick("clear")}
        >
          AC
        </button>
        <button
          className="zeroBtn btn"
          id="zero"
          onClick={() => buttonClick("0")}
        >
          0
        </button>
        <button
          className="oneBtn btn"
          id="one"
          onClick={() => buttonClick("1")}
        >
          1
        </button>
        <button
          className="twoBtn btn"
          id="two"
          onClick={() => buttonClick("2")}
        >
          2
        </button>
        <button
          className="threeBtn btn"
          id="three"
          onClick={() => buttonClick("3")}
        >
          3
        </button>
        <button
          className="fourBtn btn"
          id="four"
          onClick={() => buttonClick("4")}
        >
          4
        </button>
        <button
          className="fiveBtn btn"
          id="five"
          onClick={() => buttonClick("5")}
        >
          5
        </button>
        <button
          className="sixBtn btn"
          id="six"
          onClick={() => buttonClick("6")}
        >
          6
        </button>
        <button
          className="sevenBtn btn"
          id="seven"
          onClick={() => buttonClick("7")}
        >
          7
        </button>
        <button
          className="eightBtn btn"
          id="eight"
          onClick={() => buttonClick("8")}
        >
          8
        </button>
        <button
          className="nineBtn btn"
          id="nine"
          onClick={() => buttonClick("9")}
        >
          9
        </button>
        <button
          className="decimalBtn btn"
          id="decimal"
          onClick={() => buttonClick(".")}
        >
          .
        </button>
        <button
          className="divisionBtn btn"
          id="divide"
          onClick={() => buttonClick("/")}
        >
          /
        </button>
        <button
          className="multiplicationBtn btn"
          id="multiply"
          onClick={() => buttonClick("*")}
        >
          *
        </button>
        <button
          className="subtractionBtn btn"
          id="subtract"
          onClick={() => buttonClick("-")}
        >
          -
        </button>
        <button
          className="additionBtn btn"
          id="add"
          onClick={() => buttonClick("+")}
        >
          +
        </button>
        <button
          className="equalsBtn btn"
          id="equals"
          onClick={() => buttonClick("=")}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
