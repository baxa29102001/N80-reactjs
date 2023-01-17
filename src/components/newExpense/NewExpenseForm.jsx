import React, { useState } from "react";
import classes from "./NewExpense.module.scss";
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function NewExpenseForm(props) {
  //   const [title, setTitle] = useState("");
  //   const [amount, setAmount] = useState("");
  //   const [date, setDate] = useState("");

  const [form, setForm] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const [error, setError] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      id: Math.random().toFixed(2),
      title: form.title,
      price: form.amount,
      date: {
        month: month[new Date(form.date).getMonth()],
        day: new Date(form.date).getDay(),
        year: new Date(form.date).getFullYear(),
      },
    };

    // check

    // if (!form.title || !form.amount || !form.date) {
    //   setError(true);
    //   return;
    // }

    props.onAddDataToMainDataHandler(data);
  };

  const getValuesFromInputs = (e) => {
    setError(false);
    setForm((prevValue) => {
      return {
        ...prevValue,
        [e.target.name]: e.target.value,
      };
    });
  };

  const focusHandler = () => {
    console.log("Focus");
  };

  const blurHandler = (e) => {
    console.log("Blur");

    if (!e.target.value.trim()) {
      setError(true);
    }
  };

  return (
    <div className="expense-form-container">
      <div className="expense-form">
        {/* {error && <p>You should enter the data</p>} */}
        <form onSubmit={submitHandler}>
          <div className="expense-form">
            <div className="expense-input">
              <label>Title</label>
              <input
                type="text"
                onChange={getValuesFromInputs}
                name="title"
                className={error ? classes["error-input"] : ""}
                onFocus={focusHandler}
                onBlur={blurHandler}
              />
            </div>
            <div className="expense-input">
              <label>Amount</label>
              <input
                type="number"
                name="amount"
                onChange={getValuesFromInputs}
                className=""
              />
            </div>
            <div className="expense-input">
              <label>Date</label>
              <input
                type="date"
                name="date"
                onChange={getValuesFromInputs}
                className=""
              />
            </div>
          </div>

          <button type="submit">Add expense</button>
        </form>
      </div>
    </div>
  );
}

export default NewExpenseForm;
