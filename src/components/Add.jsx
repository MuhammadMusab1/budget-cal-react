import { useState } from "react";
import styles from "./Add.module.css";
function Add(props) {
  const { addItem } = props;
  //Controlled input states
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  //On change Event Handler
  function handleOnChangeDescription(e) {
    setDescription(e.target.value);
  }
  function handleOnChangeAmount(e) {
    setAmount(e.target.value);
  }
  //OnClick handler
  function handleClick(e) {
    addItem(description, +amount); //amount wil be a string so convert it to a number
    setAmount(0);
    setDescription("");
  }

  return (
    <div className={styles["add"]}>
      <div className={styles["add__container"]}>
        <input
          type="text"
          className={styles["add__description"]}
          placeholder="Add description"
          value={description}
          onChange={handleOnChangeDescription}
        />
        <input
          type="number"
          className={styles["add__value"]}
          placeholder="Value"
          value={amount}
          onChange={handleOnChangeAmount}
        />
        <button onClick={handleClick} className={styles["add__btn"]}>
          <i className="ion-ios-checkmark-outline"></i>
        </button>
      </div>
    </div>
  );
}
export { Add };
