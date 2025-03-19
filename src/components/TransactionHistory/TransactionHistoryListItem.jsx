export default function TransactionHistoryListItem({ type, amount, currency }) {
  return (
    <>
      <th>{type}</th>
      <th>{amount}</th>
      <th>{currency}</th>
    </>
  );
}
