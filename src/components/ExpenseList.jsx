import { BudgetItem } from "./BudgetItem";
import styles from "./ExpenseList.module.css";
function ExpenseList(props) {
  const { list } = props;
  const reactExpenseElements = list.map((item) => {
    if (item.value < 0) {
      return <BudgetItem item={item} typeOfList="expense" key={item.id} />;
    }
  });
  return (
    <div className={styles["expenses"]}>
      <h2 className={styles["expenses__title"]}>Expenses</h2>
      <div className="expenses__list">{reactExpenseElements}</div>
    </div>
  );
}

export { ExpenseList };
