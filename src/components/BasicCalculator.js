import React, { useState } from "react";
import "./BasicCalculator.css"; // Assuming you'll name the CSS file this

const BasicCalculator = () => {
  const [value, setValue] = useState("");

  const handleButtonClick = (input) => {
    setValue((prevValue) => prevValue + input);
  };

  const clearInput = () => {
    setValue("");
  };

  const calculateResult = () => {
    try {
      // eslint-disable-next-line no-eval
      setValue(eval(value)); // Be cautious with eval() in production
    } catch (error) {
      setValue("Error");
    }
  };

  return (
    <div className="container">
      <form name="calc" className="calculator">
        <input type="text" className="value" readOnly name="txt" value={value} />
        <span className="num clear" onClick={clearInput}>
          <i>C</i>
        </span>
        <span className="num" onClick={() => handleButtonClick("/")}>
          <i>/</i>
        </span>
        <span className="num" onClick={() => handleButtonClick("*")}>
          <i>*</i>
        </span>
        <span className="num" onClick={() => handleButtonClick("7")}>
          <i>7</i>
        </span>
        <span className="num" onClick={() => handleButtonClick("8")}>
          <i>8</i>
        </span>
        <span className="num" onClick={() => handleButtonClick("9")}>
          <i>9</i>
        </span>
        <span className="num" onClick={() => handleButtonClick("-")}>
          <i>-</i>
        </span>
        <span className="num" onClick={() => handleButtonClick("4")}>
          <i>4</i>
        </span>
        <span className="num" onClick={() => handleButtonClick("5")}>
          <i>5</i>
        </span>
        <span className="num" onClick={() => handleButtonClick("6")}>
          <i>6</i>
        </span>
        <span className="num plus" onClick={() => handleButtonClick("+")}>
          <i>+</i>
        </span>
        <span className="num" onClick={() => handleButtonClick("1")}>
          <i>1</i>
        </span>
        <span className="num" onClick={() => handleButtonClick("2")}>
          <i>2</i>
        </span>
        <span className="num" onClick={() => handleButtonClick("3")}>
          <i>3</i>
        </span>
        <span className="num" onClick={() => handleButtonClick("0")}>
          <i>0</i>
        </span>
        <span className="num" onClick={() => handleButtonClick("00")}>
          <i>00</i>
        </span>
        <span className="num" onClick={() => handleButtonClick(".")}>
          <i>.</i>
        </span>
        <span className="num equal" onClick={calculateResult}>
          <i>=</i>
        </span>
      </form>
      
    </div>
  );
};

export default BasicCalculator;