import { BudgetItem } from "./BudgetItem";
import styles from "./ExpenseList.module.css";
function ExpenseList(props) {
  const { list, deleteItem } = props;
  const reactExpenseElements = list.map((item) => {
    if (item.value < 0) {
      return (
        <BudgetItem
          item={item}
          typeOfItem="expense"
          key={item.id}
          deleteItem={deleteItem}
        />
      );
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
