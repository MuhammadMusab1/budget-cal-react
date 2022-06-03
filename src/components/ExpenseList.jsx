import { BudgetItem } from "./BudgetItem";
function ExpenseList(props) {
  return (
    <div className="expenses">
      <h2 className="expenses__title">Expenses</h2>
      <div className="expenses__list">
        <BudgetItem typeOfList="expense" />
        <BudgetItem typeOfList="expense" />
      </div>
    </div>
  );
}

export { ExpenseList };
