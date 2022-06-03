function Income(props) {
  return (
    <div className="item" data-transaction-id="0">
      <div className="item__description">Paycheque</div>
      <div className="right">
        <div className="item__value">+ $250.55</div>
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

export { Income };
