import styles from "./BudgetItem.module.css";
function BudgetItem(props) {
  const { typeOfList } = props;
  function addPercentageIfTypeExpenseList() {
    if (typeOfList === "expense") {
      return (
        <div
          className={styles["item__percentage"]}
          style={{ color: pickColorAccordingly() }}
        >
          10%
        </div>
      );
    }
    //if it is income then we don't need to show percentage
  }
  function pickColorAccordingly() {
    if (typeOfList === "expense") {
      return "#ff5049";
    } else {
      return "#28b9b5";
    }
  }
  return (
    <div className={styles["item"]} data-transaction-id="4">
      <div className={styles["item__description"]}>Car Payment </div>
      <div className="right">
        <div
          className={styles["item__value"]}
          style={{ color: pickColorAccordingly() }}
        >
          - $299.99
        </div>
        {addPercentageIfTypeExpenseList()}
        <div className={styles["item__delete"]}>
          <button
            className={styles["item__delete--btn"]}
            style={{ color: pickColorAccordingly() }}
          >
            <i className="ion-ios-close-outline"></i>
          </button>
        </div>
      </div>
      <div className={styles["item__date"]}>Apr. 21st, 2020</div>
    </div>
  );
}
export { BudgetItem };
