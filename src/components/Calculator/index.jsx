import React from "react";

const Calculator = () => {
  return (
    <div className="calculator-container">
      <div className="displays-container" id="display">
        <div className="output-display"> </div>
        <div className="input-display">0</div>
      </div>
      <div className="buttons-container">
        <button className="clearBtn btn" id="clear">
          Clear
        </button>
        <button className="zeroBtn btn" id="zero">
          0
        </button>
        <button className="oneBtn btn" id="one">
          1
        </button>
        <button className="twoBtn btn" id="two">
          2
        </button>
        <button className="threeBtn btn" id="three">
          3
        </button>
        <button className="fourBtn btn" id="four">
          4
        </button>
        <button className="fiveBtn btn" id="five">
          5
        </button>
        <button className="sixBtn btn" id="six">
          6
        </button>
        <button className="sevenBtn btn" id="seven">
          7
        </button>
        <button className="eightBtn btn" id="eight">
          8
        </button>
        <button className="nineBtn btn" id="nine">
          9
        </button>
        <button className="decimalBtn btn" id="decimal">
          .
        </button>
        <button className="divisionBtn btn" id="divide">
          /
        </button>
        <button className="multiplicationBtn btn" id="multiply">
          *
        </button>
        <button className="subtractionBtn btn" id="subtract">
          -
        </button>
        <button className="additionBtn btn" id="add">
          +
        </button>
        <button className="equalsBtn btn" id="equals">
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
