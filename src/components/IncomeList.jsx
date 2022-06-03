import { BudgetItem } from "./BudgetItem";
function IncomeList(props) {
  return (
    <div className="income">
      <h2 className="income__title">Income</h2>
      <div className="income__list">
        <BudgetItem typeOfList="income" />
        <BudgetItem typeOfList="income" />
      </div>
    </div>
  );
}
export { IncomeList };
