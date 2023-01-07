import { useState } from "react";

function ExpenseItem({ title = "Toilet Paper", price = "99.5", date }) {
  const [customTitle, setCustomTitle] = useState({ title, price });

  const clickHandler = (e) => {
    setCustomTitle({
      title: "Updated",
      price: "0.00",
    });
  };

  return (
    <>
      <div className="expense-item">
        <div className="expenseDate">
          <p className="expenseDateMonth">{date.month}</p>
          <p className="expenseDateYear">{date.year}</p>
          <p className="expenseDateDay">{date.day}</p>
        </div>

        <div className="expense-content">
          <h2 className="expense-item-title">{customTitle.title}</h2>
          <p className="expense-item-price">${customTitle.price}</p>
        </div>
      </div>
    </>
  );
}

export default ExpenseItem;
