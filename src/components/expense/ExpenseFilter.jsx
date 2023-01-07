import React, { useState } from "react";

function ExpenseFilter(props) {
  const getYearHandler = (e) => {
    props.onChangeFilterHandler(e.target.value);
  };
  return (
    <div className="expense-filter">
      <h2>Filter by Year</h2>

      <select onChange={getYearHandler}>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
  );
}

export default ExpenseFilter;
