import MyCalendar from "./comps/MyCalendar";
import "./App.css";
import ControlList from "./comps/ControlList"

function App() {
  return (
    <div className="App">
      <header>
        <h1>나만의 달력</h1>
      </header>
      <table>
        <div class="todo">
          <ControlList />
        </div>
      </table>
    </div>
  );
}

export default App;
