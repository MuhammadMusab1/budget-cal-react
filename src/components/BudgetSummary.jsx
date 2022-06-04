import { IncomeSummary } from "./IncomeSummary";
import { ExpenseSummary } from "./ExpenseSummary";
//CSS for BudgetSummary
import styles from "./BudgetSummary.module.css";
function BudgetSummary(props) {
  return (
    <div className={styles["budget"]}>
      <div className={styles["budget__title"]}>
        Available Budget in{" "}
        <span className={styles["budget__title--month"]}>April 2020</span>:
      </div>

      <div className={styles["budget__value"]}>+ $225.10</div>
      <IncomeSummary />
      <ExpenseSummary />
    </div>
  );
}
export { BudgetSummary };
