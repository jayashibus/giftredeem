import React, { useState, useEffect } from "react";
import "./App.css";
import GiftRedeem from "./component/GiftRedeem";
import { getStaffDetails, getRedemption } from "./http/HttpService";

function App() {
  const [data, setData] = useState<any>({
    staffData: [],
    redemptionData: [],
  });

  useEffect(() => {
    Promise.all([getStaffDetails(), getRedemption()]).then((values) => {
      console.log(values);
      setData({
        ...data,
        staffData: values[0],
        redemptionData: values[1],
      });
    });
  }, []);

  return (
    <div className="App">
      <GiftRedeem data={data} />
    </div>
  );
}

export default App;
