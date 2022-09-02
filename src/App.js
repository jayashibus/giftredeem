import "./App.css";
import GiftRedeem from "./component/GiftRedeem";
import data from "./data";

function App() {
  return (
    <div className="App">
      <GiftRedeem data={data} />
    </div>
  );
}

export default App;
