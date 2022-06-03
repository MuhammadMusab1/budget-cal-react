function Expense(props) {
  return (
    <div className="item" data-transaction-id="4">
      <div className="item__description">Car Payment </div>
      <div className="right">
        <div className="item__value">- $299.99</div>
        <div className="item__percentage">52%</div>
        <div className="item__delete">
          <button className="item__delete--btn">
            <i className="ion-ios-close-outline"></i>
          </button>
        </div>
      </div>
      <div className="item__date">Apr. 21st, 2020</div>
    </div>
  );
}
export { Expense };
