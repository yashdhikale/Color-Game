import React, { useState } from "react";

function App() {
  const predefinedColors = ["#ffcccc", "#ccffcc", "#ccccff", "#ffffcc"];

  const [colors, setColors] = useState(predefinedColors);

  const handleBlockClick = (index) => {
    const newColors = [...colors];

    const randomIndex = Math.floor(Math.random() * predefinedColors.length);

    newColors[index] = predefinedColors[randomIndex];

    setColors(newColors);
  };

  const checkColorsMatch = (colors) => {
    const firstColor = colors[0];

    const allMatched = colors.every((color) => color === firstColor);

    if (allMatched) {
      alert("Colors Matched!");
    }
  };

  return (
    <>
      <div className="my-component">
        <div
          style={{ backgroundColor: "#141414", color: "white", padding: 10 }}
        >
          <h2>Color Blocks Game</h2>
          <h4>Match the Colors of all Blocks</h4>
        </div>

        <div className="center">
          <div className="container">
            {colors.map((color, index) => (
              <div
                key={index}
                className="block"
                style={{ backgroundColor: color }}
              >
                Block {index + 1}
              </div>
            ))}
          </div>
        </div>
        <div className="container">
          {colors.map((color, index) => (
            <button
              key={index}
              className="block1"
              onClick={() => {
                handleBlockClick(index);
                checkColorsMatch(colors);
              }}
              style={{ backgroundColor: color }}
            >
              Click me for block {index + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
