import { Expense } from "./Expense";
function ExpenseList(props) {
  return (
    <div className="expenses">
      <h2 className="expenses__title">Expenses</h2>
      <div className="expenses__list">
        <Expense />
        <div className="item" data-transaction-id="5">
          <div className="item__description">Dinner with Friends</div>
          <div className="right">
            <div className="item__value">- $55.00</div>
            <div className="item__percentage">9%</div>
            <div className="item__delete">
              <button className="item__delete--btn">
                <i className="ion-ios-close-outline"></i>
              </button>
            </div>
          </div>
          <div className="item__date">Apr. 21st, 2020</div>
        </div>
      </div>
    </div>
  );
}

export { ExpenseList };
