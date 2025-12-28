import type { ReactNode } from "react";
import { useState } from "react";
import {
  Alstroemeria,
  Cometik,
  HokagoClimaxGirls,
  IlluminationStars,
  LAntica,
  Noctchill,
  Shhis,
  ShinyColors,
  StrayLight,
} from "../lib";

const IconBox = ({ name, children }: { name: string; children: ReactNode }) => (
  <div
    style={{
      display: "inline-flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0.5rem",
    }}
  >
    <div
      style={{
        border: "1px solid #ccc",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
    <span style={{ fontSize: "12px" }}>{name}</span>
  </div>
);

function App() {
  const [size, setSize] = useState(64);
  const [color, setColor] = useState(null);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Shinycolors Icons Demo</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
          gap: "1rem",
          marginTop: "2rem",
        }}
      >
        <IconBox name="Alstroemeria">
          <Alstroemeria size={size} color={color} />
        </IconBox>
        <IconBox name="Cometik">
          <Cometik size={size} color={color} />
        </IconBox>
        <IconBox name="HokagoClimaxGirls">
          <HokagoClimaxGirls size={size} />
        </IconBox>
        <IconBox name="IlluminationStars">
          <IlluminationStars size={size} color={color} />
        </IconBox>
        <IconBox name="StrayLight">
          <StrayLight size={size} color={color} />
        </IconBox>
        <IconBox name="Shhis">
          <Shhis size={size} color={color} />
        </IconBox>
        <IconBox name="LAntica">
          <LAntica size={size} color={color} />
        </IconBox>
        <IconBox name="Noctchill">
          <Noctchill size={size} />
        </IconBox>
        <IconBox name="Shinycolors Logo">
          <ShinyColors size={size} color={color} />
        </IconBox>
      </div>

      <div style={{ marginTop: "2rem" }}>
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
