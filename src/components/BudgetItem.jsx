import styles from "./BudgetItem.module.css";
function BudgetItem(props) {
  const { typeOfItem, item, deleteItem } = props;
  //Utility Functions
  function addPercentageIfTypeExpenseList() {
    if (typeOfItem === "expense") {
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
    if (typeOfItem === "expense") {
      return "#ff5049";
    } else {
      return "#28b9b5";
    }
  }
  //Click handler function
  function handleClick(e) {
    const id = +e.target.closest(".BudgetItem_item__-zE5l").dataset
      .transactionId;
    deleteItem(id);
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
            onClick={handleClick}
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
