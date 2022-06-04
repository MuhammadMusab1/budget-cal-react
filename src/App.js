import "./App.css";
import "./style.css";
import { useState, useEffect } from "react";
//Components Import
import { BudgetSummary } from "./components/BudgetSummary";
import { IncomeList } from "./components/IncomeList";
import { ExpenseList } from "./components/ExpenseList";
import { Add } from "./components/Add";

function App() {
  const InitialState = [
    {
      id: 1,
      description: "Car Payment",
      value: 200,
      date: new Date().toDateString(),
    },
    {
      id: 2,
      description: "Pocket Money",
      value: 20,
      date: new Date().toDateString(),
    },
    {
      id: 3,
      description: "Groceries",
      value: -100,
      date: new Date().toDateString(),
    },
  ];
  const [allItems, setAllItems] = useState(InitialState);
  //Handle functions
  function handleDeleteItem(id) {
    setAllItems((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  }

  return (
    <div className="app">
      <div className="top">
        <BudgetSummary />
      </div>
      <div className="bottom">
        <Add />
        <div className="container">
          <IncomeList list={allItems} deleteItem={handleDeleteItem} />
          <ExpenseList list={allItems} deleteItem={handleDeleteItem} />
        </div>
      </div>
    </div>
  );
}

export default App;
