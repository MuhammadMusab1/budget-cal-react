function Top(props) {
  return (
    <div className="top">
      <div className="budget">
        <div className="budget__title">
          Available Budget in{" "}
          <span className="budget__title--month">April 2020</span>:
        </div>

        <div className="budget__value">+ $225.10</div>

        <div className="budget__income">
          <div className="budget__income--text">Income</div>
          <div className="right">
            <div className="budget__income--value">+ $580.09</div>
            <div className="budget__income--percentage">&nbsp;</div>
          </div>
        </div>

        <div className="budget__expenses">
          <div className="budget__expenses--text">Expenses</div>
          <div className="right">
            <div className="budget__expenses--value">- $354.99</div>
            <div className="budget__expenses--percentage">61%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export { Top };
