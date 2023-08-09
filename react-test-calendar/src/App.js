import MyCalendar from "./comps/MyCalendar";
import "./App.css";
import TodoMain from "./comps/TodoMain";

function App() {
  return (
    <div className="App">
      <header>
        <h1>나만의 달력</h1>
      </header>
      <table>
        <div class="cal">
          <MyCalendar />
        </div>
        <div class="todo">
          <TodoMain />
        </div>
      </table>
    </div>
  );
}

export default App;
