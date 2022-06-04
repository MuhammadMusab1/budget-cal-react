import { IncomeSummary } from "./IncomeSummary";
import { ExpenseSummary } from "./ExpenseSummary";
//CSS for BudgetSummary
import styles from "./BudgetSummary.module.css";
import { useState } from "react";
function BudgetSummary(props) {
  const { totalBudget } = props;
  return (
    <div className={styles["budget"]}>
      <div className={styles["budget__title"]}>
        Available Budget in{" "}
        <span className={styles["budget__title--month"]}>April 2020</span>:
      </div>

      <div className={styles["budget__value"]}>
        {totalBudget > 0 ? "+" : "-"} ${Math.abs(totalBudget)}
      </div>
      <IncomeSummary />
      <ExpenseSummary />
    </div>
  );
}
export { BudgetSummary };
