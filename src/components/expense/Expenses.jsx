import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

function Expenses({ expenses }) {
  const [year, setYear] = useState("all");

  const filterByYear = (year) => {
    setYear(year);
  };

  const filteredExpenses = expenses.filter((item) => {
    if (year === "all") return true;

    return +item.date.year === +year; 
  });

  return (
    <>
      <ExpenseFilter onChangeFilterHandler={filterByYear} />

      {filteredExpenses.map((item) => (
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
