import styles from "./Add.module.css";
function Add(props) {
  return (
    <div className={styles["add"]}>
      <div className={styles["add__container"]}>
        <input
          type="text"
          className={styles["add__description"]}
          placeholder="Add description"
        />
        <input
          type="number"
          className={styles["add__value"]}
          placeholder="Value"
        />
        <button className={styles["add__btn"]}>
          <i className="ion-ios-checkmark-outline"></i>
        </button>
      </div>
    </div>
  );
}
export { Add };
