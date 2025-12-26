import { useState } from "react";
import {
  Alstromeria,
  Cometik,
  HokagoClimaxGirls,
  IlluminationStars,
  LAntica,
  Shhis,
  StrayLight,
} from "../lib";

function App() {
  const [size, setSize] = useState(24);
  const [color, setColor] = useState("#000000");

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Shinycolors Icons Demo</h1>

      <div style={{ marginTop: "2rem" }}>
        <h2>HokagoClimaxGirls Icon</h2>
        <Alstromeria size={size} color={color} />
        <Cometik size={size} color={color} />
        <HokagoClimaxGirls />
        <IlluminationStars size={size} color={color} />
        <StrayLight size={size} color={color} />
        <Shhis size={size} color={color} />
        <LAntica size={size} color={color} />

        <div style={{ marginTop: "1rem" }}>
          <label>
            Size:{" "}
            <input
              type="range"
              min="16"
              max="128"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
            />
            {size}px
          </label>
        </div>

        <div style={{ marginTop: "0.5rem" }}>
          <label>
            Color:{" "}
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
