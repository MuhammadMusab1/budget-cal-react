import { Income } from "./Income";
function IncomeList(props) {
  return (
    <div className="income">
      <h2 className="icome__title">Income</h2>
      <div className="income__list">
        <Income />
        <div className="item" data-transaction-id="1">
          <div className="item__description">Cheque from Grandma</div>
          <div className="right">
            <div className="item__value">+ $5.55</div>
            <div className="item__delete">
              <button className="item__delete--btn">
                <i className="ion-ios-close-outline"></i>
              </button>
            </div>
          </div>
          <div className="item__date">Apr. 21st, 2020</div>
        </div>
        <div className="item" data-transaction-id="2">
          <div className="item__description">Tax Refund</div>
          <div className="right">
            <div className="item__value">+ $323.99</div>
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
export { IncomeList };
