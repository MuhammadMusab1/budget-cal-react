import styles from "./BudgetItem.module.css";
function BudgetItem(props) {
  const { typeOfList, item } = props;
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
    <div className={styles["item"]} data-transaction-id={item.id}>
      <div className={styles["item__description"]}>{item.description}</div>
      <div className="right">
        <div
          className={styles["item__value"]}
          style={{ color: pickColorAccordingly() }}
        >
          {item.value > 0 ? "+" : "-"} ${Math.abs(item.value).toFixed(2)}
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
      <div className={styles["item__date"]}>{item.date}</div>
    </div>
  );
}
export { BudgetItem };
