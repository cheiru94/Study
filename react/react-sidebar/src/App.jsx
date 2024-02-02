import { useState } from "react";
import Sidebar from "./components/Sidebar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./App.css";

function App() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  console.log("startDate, endDate: ", startDate, endDate);
  return (
    <div className="App">
      <Sidebar />
      <DatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          setDateRange(update);
        }}
        withPortal
      />
    </div>
  );
}

export default App;
