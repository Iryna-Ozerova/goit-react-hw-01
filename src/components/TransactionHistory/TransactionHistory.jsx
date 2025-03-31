import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
    return (
<table className={css.transactionTable}>
  <thead>
    <tr>
        <th className={css.tabHead}>Type</th>
        <th className={css.tabHead}>Amount</th>
        <th className={css.tabHead}>Currency</th>
    </tr>
            </thead>

             <tbody>
            {items.map(({ id, type, amount, currency }) => (
                <tr className={css.tabLine} key={id}>
                    <td className={css.tabBody}>{type}</td>
                    <td className={css.tabBody}>{amount}</td>
                    <td className={css.tabBody}>{currency}</td>
                </tr>
                 ))}
                </tbody>
            </table>
            );
};

export default TransactionHistory;