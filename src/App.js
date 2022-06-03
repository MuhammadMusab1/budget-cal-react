import "./App.css";
import "./style.css";
//Components Import
import { BudgetSummary } from "./components/BudgetSummary";
import { IncomeList } from "./components/IncomeList";
import { ExpenseList } from "./components/ExpenseList";
import { Add } from "./components/Add";

function App() {
  return (
    <div className="app">
      <div className="top">
        <BudgetSummary />
      </div>
      <div className="bottom">
        <Add />
        <div className="container">
          <IncomeList />
          <ExpenseList />
        </div>
      </div>
    </div>
  );
}

export default App;
