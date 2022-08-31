import "./App.css";
import Verify from "./component/Verify";
import data from "./data";

function App() {
  return (
    <div className="App">
      <Verify data={data} />
    </div>
  );
}

export default App;
