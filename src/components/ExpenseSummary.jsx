import styles from "./ExpenseSummary.module.css";
function ExpenseSummary(props) {
  return (
    <div className={styles["budget__expenses"]}>
      <div className={styles["budget__expenses--text"]}>Expenses</div>
      <div className="right">
        <div className={styles["budget__expenses--value"]}>- $354.99</div>
        <div className={styles["budget__expenses--percentage"]}>61%</div>
      </div>
    </div>
  );
}
export { ExpenseSummary };
