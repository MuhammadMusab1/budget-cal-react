function Add(props) {
  return (
    <div className="add">
      <div className="add__container">
        <input
          type="text"
          className="add__description"
          placeholder="Add description"
        />
        <input type="number" className="add__value" placeholder="Value" />
        <button className="add__btn">
          <i className="ion-ios-checkmark-outline"></i>
        </button>
      </div>
    </div>
  );
}
export { Add };
