import { useState } from "react";
import "./App.css";
import ClickCounter from "./components/ClickCounter";
import LightToggle from "./components/LightToggle";
import LottoNumbers from "./components/LottoNumbers";

function App() {
  const [isLightsOn, setIsLightOn] = useState<boolean>(false);
  const [lottoNumbers, setLottoNumbers] = useState<number[]>([]);
  const [counter, setCounter] = useState<number>(0);

  const handleToggleLights = () => {
    setIsLightOn(!isLightsOn);
  };

  const handleGenerate = () => {
    const randomNums = Array.from(
      { length: 7 },
      () => Math.floor(Math.random() * 50) + 1
    );

    setLottoNumbers(randomNums);
  };

  const handleCounter = () => {
    setCounter((prevCount) => prevCount + 1)
  }

  return (
    <div>
      <h2>Light Toggle</h2>
      <LightToggle onToggleLights={handleToggleLights} />
      <div
        style={{
          backgroundColor: isLightsOn ? "White" : "black",
          color: isLightsOn ? "black" : "white",
        }}
      >
        Change this background color using the style attribute
      </div>

      <h2>Lotto Numbers</h2>
      <LottoNumbers onGenerate={handleGenerate} />
      <div className="output">
        {lottoNumbers.length > 0 ? lottoNumbers.join(", ") : ""}
      </div>

      <h2>Click Counter</h2>
      <ClickCounter onCount={handleCounter} />
      <div className="output">{counter}</div>
    </div>
  );
}

export default App;
