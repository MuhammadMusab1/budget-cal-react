function BudgetItem(props) {
  const { typeOfList } = props;
  function addPercentageIfTypeExpenseList(typeOfList) {
    if (typeOfList === "expense") {
      return <div className="item__percentage">10%</div>;
    }
    //if it is income then we don't need to show percentage
  }
  return (
    <div className="item" data-transaction-id="4">
      <div className="item__description">Car Payment </div>
      <div className="right">
        <div className="item__value">- $299.99</div>
        {addPercentageIfTypeExpenseList(typeOfList)}
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
export { BudgetItem };
