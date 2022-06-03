import { IncomeSummary } from "./IncomeSummary";
import { ExpenseSummary } from "./ExpenseSummary";
function BudgetSummary(props) {
  return (
    <div className="budget">
      <div className="budget__title">
        Available Budget in{" "}
        <span className="budget__title--month">April 2020</span>:
      </div>

      <div className="budget__value">+ $225.10</div>
      <IncomeSummary />
      <ExpenseSummary />
    </div>
  );
}
export { BudgetSummary };
