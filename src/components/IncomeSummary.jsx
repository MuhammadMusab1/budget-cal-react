import styles from "./IncomeSummary.module.css";
function IncomeSummary(props) {
  const { totalIncome } = props;
  return (
    <div className={styles["budget__income"]}>
      <div className={styles["budget__income--text"]}>Income</div>
      <div className="right">
        <div className={styles["budget__income--value"]}>+ ${totalIncome}</div>
        <div className={styles["budget__income--percentage"]}>&nbsp;</div>
      </div>
    </div>
  );
}
export { IncomeSummary };
