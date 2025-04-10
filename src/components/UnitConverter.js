import React, { useState } from "react";
import "./UnitConverter.css"; // For styling

const UnitConverter = () => {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState("cm");
  const [toUnit, setToUnit] = useState("m");
  const [result, setResult] = useState("");

  const units = {
    length: {
      mm: 0.001,
      cm: 0.01,
      m: 1,
      km: 1000,
      inch: 0.0254,
      foot: 0.3048,
      yard: 0.9144,
      mile: 1609.34,
    },
    weight: {
      mg: 0.001,
      g: 1,
      kg: 1000,
      ton: 1000000,
      pound: 453.592,
      ounce: 28.3495,
    },
    temperature: {
      C: (val) => val,
      F: (val) => (val * 9) / 5 + 32,
      K: (val) => val + 273.15,
    },
  };

  const handleConvert = () => {
    if (!value || isNaN(value)) {
      setResult("Invalid input");
      return;
    }

    let num = parseFloat(value);
    let category = Object.keys(units).find((cat) =>
      Object.keys(units[cat]).includes(fromUnit)
    );

    if (category === "temperature") {
      if (fromUnit === "C" && toUnit === "F") setResult(units.temperature.F(num));
      else if (fromUnit === "C" && toUnit === "K") setResult(units.temperature.K(num));
      else if (fromUnit === "F" && toUnit === "C") setResult(((num - 32) * 5) / 9);
      else if (fromUnit === "F" && toUnit === "K") setResult(((num - 32) * 5) / 9 + 273.15);
      else if (fromUnit === "K" && toUnit === "C") setResult(num - 273.15);
      else if (fromUnit === "K" && toUnit === "F") setResult(((num - 273.15) * 9) / 5 + 32);
      else setResult(num);
    } else {
      let baseValue = num * units[category][fromUnit];
      let convertedValue = baseValue / units[category][toUnit];
      setResult(convertedValue.toFixed(4));
    }
  };

  return (
    <div className="converter">
      <h2>Unit Converter</h2>
      <input
        type="number"
        placeholder="Enter value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
        {Object.keys(units.length).map((unit) => (
          <option key={unit} value={unit}>
            {unit}
          </option>
        ))}
      </select>
      <span> to </span>
      <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
        {Object.keys(units.length).map((unit) => (
          <option key={unit} value={unit}>
            {unit}
          </option>
        ))}
      </select>
      <button onClick={handleConvert}>Convert</button>
      <h3>Result: {result}</h3>
    </div>
  );
};

export default UnitConverter;
