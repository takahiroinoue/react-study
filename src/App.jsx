import React, { useEffect, useState } from "react";
import ColorMessage from "./Components/Cloro";

const App = () => {
  const [num, setNum] = useState(0);
  const [flgShowFace, setShowFace] = useState();

  const clickButton = () => {
    setNum(num + 1);
  };

  const onClickShowFaceSwitch = () => {
    setShowFace(!flgShowFace);
  };

  useEffect(() => {
    if (num > 0 && num % 3 === 0) {
      flgShowFace || setShowFace(true);
    } else {
      flgShowFace && setShowFace(false);
    }
  }, [num]);

  const styleP = {
    color: "blue",
    fontSize: "18px"
  };

  return (
    <>
      <h1 style={{ color: "red" }}>Hello!!!</h1>
      <ColorMessage text="How are you?" color="purple" />
      <ColorMessage color="pink">I'm good</ColorMessage>
      <button style={styleP} onClick={clickButton}>
        BUTTON
      </button>
      <button onClick={onClickShowFaceSwitch}>On/Off</button>
      <p>{num}</p>
      {flgShowFace && <p>(^◇^;)</p>}
    </>
  );
};

export default App;
