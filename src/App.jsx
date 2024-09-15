import React, { useEffect, useState } from "react";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);
  const [countWidth, setCountWidth] = useState(30)
  useEffect(() => {
    if (count < 10) {
      setCountWidth(30)
    } else if (count < 100) {
      setCountWidth(40)
    }
  }, [count]);
  return (
    <React.Fragment>
      <button onClick={() => setCount(count - 1)}>&#8592;</button>
      <div style={{width: `${countWidth}px`}} id="count">{count}</div>
      <button onClick={() => setCount(count + 1)}>&#8594;</button>
    </React.Fragment>
  );
}

export default App;
