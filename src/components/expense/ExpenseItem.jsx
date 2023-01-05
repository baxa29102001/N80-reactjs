import { useState } from "react";

function ExpenseItem({ title = "Toilet Paper", price = "99.5", date }) {
  const [customTitle, setCustomTitle] = useState({ title, price });

  const clickHandler = (e) => {
    setCustomTitle({
      title: "Updated",
      price: "0.00",
    });
  };



  console.log("Expense Item Component");

  return (
    <>
      <div className="expense-item">
        <div className="expenseDate">
          <p className="expenseDateMonth">August</p>
          <p className="expenseDateYear">2021</p>
          <p className="expenseDateDay">15</p>
        </div>

        <div className="expense-content">
          <h2 className="expense-item-title">{customTitle.title}</h2>
          <p className="expense-item-price">${customTitle.price}</p>
        </div>

        <button onClick={clickHandler}>Change title</button>
      </div>
    </>
  );
}

export default ExpenseItem;
