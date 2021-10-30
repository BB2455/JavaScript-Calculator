import React, { useState } from "react";

const Calculator = () => {
  const [currentDisplay, setCurrentDisplay] = useState("");
  const [outputDisplay, setOutputDisplay] = useState("");
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
    )
      return;
    if (currentDisplay === "0" && value !== "0") {
      setCurrentDisplay(value);
      setOutputDisplay(value);
    }
    setCurrentDisplay(currentDisplay + value);
    setOutputDisplay(outputDisplay + value);
  };

  const addOperator = (operator) => {
    if (isComputed) {
      clear();
      setIsComputed(false);
      return;
    }
    if (outputDisplay.slice(outputDisplay.length - 1) === "-") {
      if (operator === "-") {
        setOutputDisplay(outputDisplay.slice(0, outputDisplay.length - 1));
        setCurrentDisplay("");
        return;
      }
    }
    if (operator === "-") {
      if (currentDisplay === "" && outputDisplay === "") {
        setOutputDisplay("-");
        setCurrentDisplay("-");
        return;
      }
      switch (outputDisplay.slice(outputDisplay.length - 1)) {
        case "+":
          setOutputDisplay(outputDisplay + operator);
          setCurrentDisplay("-");
          return;
        case "/":
          setOutputDisplay(outputDisplay + operator);
          setCurrentDisplay("-");
          return;
        case "*":
          setOutputDisplay(outputDisplay + operator);
          setCurrentDisplay("-");
          return;
        default:
          break;
      }
    }
    if (outputDisplay === "" || outputDisplay === "-") return;
    if (currentDisplay === "") {
      switch (outputDisplay.slice(outputDisplay.length - 1)) {
        case "-":
        case "+":
        case "/":
        case "*":
          setOutputDisplay(
            outputDisplay.slice(0, outputDisplay.length - 1) + operator
          );
          return;
        default:
          break;
      }
    }
    if (outputDisplay.slice(outputDisplay.length - 1) === "-") return;
    setOutputDisplay(outputDisplay + operator);
    setCurrentDisplay("");
  };

  const compute = () => {
    setIsComputed(true);
  };

  const clear = () => {
    setOutputDisplay("");
    setCurrentDisplay("");
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
