import styles from "./ExpenseSummary.module.css";
function ExpenseSummary(props) {
  const { totalExpense, totalIncome } = props;
  function findTotalExpensePercentage() {
    let percentage = +((Math.abs(totalExpense) / totalIncome) * 100).toFixed(0);
    if (isNaN(percentage)) {
      percentage = 0;
    } else if (percentage === Number.POSITIVE_INFINITY) {
      percentage = 0;
    }
    return percentage;
  }
  return (
    <div className={styles["budget__expenses"]}>
      <div className={styles["budget__expenses--text"]}>Expenses</div>
      <div className="right">
        <div className={styles["budget__expenses--value"]}>
          - ${Math.abs(totalExpense)}
        </div>
        <div className={styles["budget__expenses--percentage"]}>
          {findTotalExpensePercentage()}%
        </div>
      </div>
    </div>
  );
}
export { ExpenseSummary };
