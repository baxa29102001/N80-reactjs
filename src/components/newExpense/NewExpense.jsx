import React from "react";
import NewExpenseForm from "./NewExpenseForm";

function NewExpense(props) {
  return (
    <>
      <NewExpenseForm
        onAddDataToMainDataHandler={props.onAddDataToMainDataHandler}
      />
    </>
  );
}

export default NewExpense;
