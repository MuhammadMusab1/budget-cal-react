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
  const [totalBudget, setTotalBudget] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  useEffect(() => {
    setTotalBudget(handleUpdateTotalBudget());
  }, [allItems]);
  useEffect(() => {
    setTotalExpense(handleUpdateTotalExpense());
  }, [allItems]);
  useEffect(() => {
    setTotalIncome(handleUpdateTotalIncome());
  }, [allItems]);
  //Handle functions
  function handleDeleteItem(id) {
    setAllItems((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  }
  function handleAddItem(description, amount) {
    const id = +(Math.random() * 100).toFixed(4);
    setAllItems((prevState) => {
      return [
        {
          id: id,
          description: description,
          value: amount,
          date: new Date().toDateString(),
        },
        ...prevState,
      ];
    });
  }
  function handleUpdateTotalBudget() {
    let budget = allItems.reduce(
      (prevItem, currentItem) => {
        return { value: prevItem.value + currentItem.value };
      },
      { value: 0 }
    );
    //at the end of the loop budget will be an object with the value that has the combined total budget
    //need a initialValue of 0 so when we don't have any items in the array it returns 0.
    //stackOverflow link: https://stackoverflow.com/questions/5732043/how-to-call-reduce-on-an-array-of-objects-to-sum-their-properties
    return budget.value;
  }
  function handleUpdateTotalExpense() {
    const expenses = allItems
      .filter((item) => item.value < 0) //get  all the expenses
      .map((item) => item.value) //get the value of all the expenses
      .reduce((prevValue, currentValue) => prevValue + currentValue, 0); //add up all the expenses
    return expenses;
  }
  function handleUpdateTotalIncome() {
    debugger;
    const incomes = allItems
      .filter((item) => item.value >= 0) //get  all the expenses
      .map((item) => item.value) //get the value of all the expenses
      .reduce((prevValue, currentValue) => prevValue + currentValue, 0); //add up all the expenses
    return incomes;
  }

  return (
    <div className="app">
      <div className="top">
        <BudgetSummary
          totalBudget={totalBudget}
          totalIncome={totalIncome}
          totalExpense={totalExpense}
        />
      </div>
      <div className="bottom">
        <Add addItem={handleAddItem} />
        <div className="container">
          <IncomeList list={allItems} deleteItem={handleDeleteItem} />
          <ExpenseList list={allItems} deleteItem={handleDeleteItem} />
        </div>
      </div>
    </div>
  );
}

export default App;
