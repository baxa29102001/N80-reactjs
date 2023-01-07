import React, { useState } from "react";
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

    console.log(data);
    props.onAddDataToMainDataHandler(data);
  };

  const getValuesFromInputs = (e) => {
    setForm((prevValue) => {
      return {
        ...prevValue,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div className="expense-form-container">
      <div className="expense-form">
        <form onSubmit={submitHandler}>
          <div className="expense-form">
            <div className="expense-input">
              <label>Title</label>
              <input type="text" onChange={getValuesFromInputs} name="title" />
            </div>
            <div className="expense-input">
              <label>Amount</label>
              <input
                type="number"
                name="amount"
                onChange={getValuesFromInputs}
              />
            </div>
            <div className="expense-input">
              <label>Date</label>
              <input type="date" name="date" onChange={getValuesFromInputs} />
            </div>
          </div>

          <button type="submit">Add expense</button>
        </form>
      </div>
    </div>
  );
}

export default NewExpenseForm;
