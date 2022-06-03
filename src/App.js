import "./App.css";
import "./style.css";
//Components Import
import { Top } from "./components/Top";
import { Bottom } from "./components/Bottom";
import { IncomeList } from "./components/IncomeList";
import { ExpenseList } from "./components/ExpenseList";
import { Add } from "./components/Add";

function App() {
  return (
    <div className="app">
      <Top />
      <Bottom>
        <Add />
        <div className="container">
          <IncomeList />
          <ExpenseList />
        </div>
      </Bottom>
    </div>
  );
}

export default App;
