import ExpenseItem from "./ExpenseItem";

function Expenses({ expenses }) {

  console.log('Expense Component')

  return (
    <>
      {expenses.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          price={item.price}
          date={item.date}
        />
      ))}
    </>
  );
}

export default Expenses;
