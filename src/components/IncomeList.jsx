import { BudgetItem } from "./BudgetItem";
import styles from "./IncomeList.module.css";
function IncomeList(props) {
  return (
    <div className={styles["incomes"]}>
      <h2 className={styles["incomes__title"]}>Income</h2>
      <div className="incomes__list">
        <BudgetItem typeOfList="income" />
        <BudgetItem typeOfList="income" />
      </div>
    </div>
  );
}
export { IncomeList };
