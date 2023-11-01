import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState(null);

  function handleClick() {
    console.log("button has been clicked");
  }

  return (
    <div className="App">
      {data ? <div>There is data</div> : <div>There is no data</div>}
      <button onClick={handleClick}>Fetch data</button>
    </div>
  );
}

export default App;
