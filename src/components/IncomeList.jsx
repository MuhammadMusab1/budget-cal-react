import { BudgetItem } from "./BudgetItem";
import styles from "./IncomeList.module.css";
function IncomeList(props) {
  const { list, deleteItem } = props;
  const reactIncomeElements = list.map((item) => {
    if (item.value >= 0) {
      return (
        <BudgetItem
          item={item}
          typeOfItem="income"
          key={item.id}
          deleteItem={deleteItem}
        />
      );
    }
  });
  return (
    <div className={styles["incomes"]}>
      <h2 className={styles["incomes__title"]}>Income</h2>
      <div className="incomes__list">{reactIncomeElements}</div>
    </div>
  );
}
export { IncomeList };
