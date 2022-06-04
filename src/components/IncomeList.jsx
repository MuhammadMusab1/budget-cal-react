import { BudgetItem } from "./BudgetItem";
import styles from "./IncomeList.module.css";
function IncomeList(props) {
  const { list } = props;
  const reactIncomeElements = list.map((item) => {
    if (item.value >= 0) {
      return <BudgetItem item={item} typeOfList="income" key={item.id} />;
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
