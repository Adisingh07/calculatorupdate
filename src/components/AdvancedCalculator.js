import React, { useState } from "react";
import "./Calculator.css";
import { evaluate } from "mathjs";

const AdvancedCalculator = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [memory, setMemory] = useState(0);
  const [isDegree, setIsDegree] = useState(true); // DEG by default

  const toRadians = (deg) => (deg * Math.PI) / 180;

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        let expression = input
        .replace(/π/g, `${Math.PI}`)
        .replace(/e/g, `${Math.E}`)
        .replace(/√/g, "sqrt")
        .replace(/sin\(([^)]+)\)/g, (_, x) =>
          `sin(${isDegree ? toRadians(evaluate(x)) : evaluate(x)})`
        )
        .replace(/cos\(([^)]+)\)/g, (_, x) =>
          `cos(${isDegree ? toRadians(evaluate(x)) : evaluate(x)})`
        )
        .replace(/tan\(([^)]+)\)/g, (_, x) =>
          `tan(${isDegree ? toRadians(evaluate(x)) : evaluate(x)})`
        )
        .replace(/log\(/g, "log10(")
                

        const result = evaluate(expression);
        setHistory([...history, `${input} = ${result}`]);
        setInput(result.toString());
      } catch (error) {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else if (value === "DEL") {
      setInput(input.slice(0, -1));
    } else if (value === "M+") {
      setMemory((prev) => prev + (parseFloat(input) || 0));
    } else if (value === "M-") {
      setMemory((prev) => prev - (parseFloat(input) || 0));
    } else if (value === "MR") {
      setInput(memory.toString());
    } else if (value === "MC") {
      setMemory(0);
    } else if (value === "RAD/DEG") {
      setIsDegree((prev) => !prev);
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="advanced-calculator-container">
      <h2 className="calculator-title">Advanced Calculator</h2>
      <div style={{ marginBottom: "5px", fontSize: "14px" }}>
        Mode: {isDegree ? "DEG" : "RAD"} &nbsp;
        <button onClick={() => handleButtonClick("RAD/DEG")}>
          Toggle Mode
        </button>
      </div>
      <input type="text" className="calculator-input" readOnly value={input} />
      <div className="calculator-buttons">
        {/* Scientific */}
        <button onClick={() => handleButtonClick("sin(")}>sin</button>
        <button onClick={() => handleButtonClick("cos(")}>cos</button>
        <button onClick={() => handleButtonClick("tan(")}>tan</button>
        <button onClick={() => handleButtonClick("log(")}>log</button>
        <button onClick={() => handleButtonClick("√(")}>√</button>

        {/* Digits & Ops */}
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("/")}>/</button>
        <button onClick={() => handleButtonClick("C")}>C</button>

        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("*")}>*</button>
        <button onClick={() => handleButtonClick("DEL")}>DEL</button>

        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("-")}>-</button>
        <button onClick={() => handleButtonClick("M+")}>M+</button>

        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button onClick={() => handleButtonClick("=")}>=</button>
        <button onClick={() => handleButtonClick("+")}>+</button>
        <button onClick={() => handleButtonClick("M-")}>M-</button>

        {/* Memory & Constants */}
        <button onClick={() => handleButtonClick("MR")}>MR</button>
        <button onClick={() => handleButtonClick("MC")}>MC</button>
        <button onClick={() => handleButtonClick("(")}>(</button>
        <button onClick={() => handleButtonClick(")")}>)</button>
        <button onClick={() => handleButtonClick("π")}>π</button>
        <button onClick={() => handleButtonClick("e")}>e</button>
      </div>

      <div className="calculator-history">
        <h3>History</h3>
        <ul>
          {history.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdvancedCalculator;
