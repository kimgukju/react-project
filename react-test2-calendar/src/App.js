import "./App.css";
import Main from "./comps/Main";
import { useState } from "react";
import MyCalendar from "./comps/MyCalendar";

function App() {
  var date = new Date();
  const [Month, setMonth] = useState(date.getMonth() + 1);
  const [Day, setDay] = useState(date.getDate());

  function SetDays(time) {
    setMonth(time.getMonth() + 1);
    setDay(time.getDate());
  }
  return (
    <div className="App">
      <header>
        <h1>나만의 달력</h1>
      </header>
      <table>
        <div className="cal">
          <MyCalendar setDays={SetDays} />
        </div>
        <div className="main">
          <Main Month={Month} Days={Day} />
        </div>
      </table>
    </div>
  );
}

export default App;
