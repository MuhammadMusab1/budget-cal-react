import { BudgetItem } from "./BudgetItem";
import styles from "./ExpenseList.module.css";
function ExpenseList(props) {
  return (
    <div className={styles["expenses"]}>
      <h2 className={styles["expenses__title"]}>Expenses</h2>
      <div className="expenses__list">
        <BudgetItem typeOfList="expense" />
        <BudgetItem typeOfList="expense" />
      </div>
    </div>
  );
}

export { ExpenseList };
