import "./App.css";
import "./style.css";
import { useState, useEffect } from "react";
//Components Import
import { BudgetSummary } from "./components/BudgetSummary";
import { IncomeList } from "./components/IncomeList";
import { ExpenseList } from "./components/ExpenseList";
import { Add } from "./components/Add";

function App() {
  const initialItems = JSON.parse(localStorage.getItem("budgetList"));
  //Every time the app starts it will try to get the budgetList key from localStorage
  //if it is not there initialItems will be null
  //and in that case allItems state will be an empty array
  //all useEffects will run once when the application first starts
  //and the localStorage useEffect will try make a budgetList key with a stringify value of an empty array in localStorage
  //UseStates
  const [allItems, setAllItems] = useState(initialItems || []);
  const [totalBudget, setTotalBudget] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  //UseEffects
  useEffect(() => {
    setTotalBudget(handleUpdateTotalBudget());
  }, [allItems]);
  useEffect(() => {
    setTotalExpense(handleUpdateTotalExpense());
  }, [allItems]);
  useEffect(() => {
    setTotalIncome(handleUpdateTotalIncome());
  }, [allItems]);
  //localStorage useEffect
  useEffect(() => {
    localStorage.setItem("budgetList", JSON.stringify(allItems));
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
          date: new Date().toLocaleDateString("en-CA", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
        },
        ...prevState,
      ];
    });
  }
  function handleUpdateTotalBudget() {
    let budget = allItems.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.value;
    }, 0);
    //at the end of the loop budget will be an object with the value that has the combined total budget
    //need a initialValue of 0 so when we don't have any items in the array it returns 0.
    //stackOverflow link: https://stackoverflow.com/questions/5732043/how-to-call-reduce-on-an-array-of-objects-to-sum-their-properties
    return budget;
  }
  function handleUpdateTotalExpense() {
    const expenses = allItems
      .filter((item) => item.value < 0) //get  all the expenses
      .map((item) => item.value) //get the value of all the expenses
      .reduce((prevValue, currentValue) => prevValue + currentValue, 0); //add up all the expenses
    return expenses;
  }
  function handleUpdateTotalIncome() {
    const incomes = allItems
      .filter((item) => item.value >= 0) //get  all the incomes
      .map((item) => item.value) //get the value of all the incomes
      .reduce((prevValue, currentValue) => prevValue + currentValue, 0); //add up all the incomes
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
          <ExpenseList
            list={allItems}
            deleteItem={handleDeleteItem}
            totalIncome={totalIncome}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
