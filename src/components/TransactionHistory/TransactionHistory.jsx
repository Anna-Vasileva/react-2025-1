import s from "./TransactionHistory.module.css";
import TransactionHistoryListItem from "./TransactionHistoryListItem";

export default function TransactionHistory({ items }) {
  return (
    <table className={s.transaction}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ type, amount, currency, id }) => {
          return (
            <tr key={id}>
              <TransactionHistoryListItem
                type={type}
                amount={amount}
                currency={currency}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
