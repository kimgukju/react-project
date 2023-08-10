import MyCalendar from "./comps/MyCalendar";
import "./App.css";
import Main from "./comps/Main"

function App() {
  return (
    <div className="App">
      <header>
        <h1>나만의 달력</h1>
      </header>
      <table>
        <div class="todo">
          <Main />
        </div>
      </table>
    </div>
  );
}

export default App;
