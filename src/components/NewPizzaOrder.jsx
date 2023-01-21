import React, { useState } from "react";

const price = {
  thin: 10,
  medium: 12,
  thick: 15,
  "25sm": 10,
  "30sm": 12,
  "35sm": 15,
};

function NewPizzaOrder(props) {
  const [form, setForm] = useState({
    name: "",
    phoneNumber: "",
    select_size: "",
    address: "",
    size: "",
    sausages: [],
    vehicle1: [],
  });
  console.log("Hello");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submit handler");
    let totalSum =
      price[form.select_size] +
      price[form.size] +
      form.vehicle1.length * 5 +
      form.sausages.length * 3;

    const finalOrder = {
      ...form,
      totalSum,
      id: Math.random().toFixed(3),
    };

    props.onAddData(finalOrder);
  };

  const getValueFromInputs = (e) => {
    console.log(e.target.value, e.target.name);

    setForm((prev) => {
      if (["vehicle1", "sausages"].includes(e.target.name)) {
        return {
          ...prev,
          [e.target.name]: prev[e.target.name].find(
            (item) => item === e.target.value
          )
            ? prev[e.target.name].filter((item) => item !== e.target.value)
            : [e.target.value, ...prev[e.target.name]],
        };
      }

      return {
        ...prev,

        [e.target.name]: e.target.value,
      };
    });
  };

  console.log(form);

  return (
    <div className="wrapper">
      <div className="container">
        <h1 className="title">Pizza order</h1>
        <div className="form-wrapper">
          <form onSubmit={submitHandler} id="form-wrapper" className="form">
            <input
              className="order-input"
              type="text"
              placeholder="User name"
              name="name"
              value={form.name}
              onChange={getValueFromInputs}
            />
            <input
              className="order-input"
              type="number"
              placeholder="Phone Number"
              value={form.phoneNumber}
              onChange={getValueFromInputs}
              name="phoneNumber"
            />
            <input
              className="order-input"
              type="text"
              placeholder="User address"
              name="address"
              value={form.address}
              onChange={getValueFromInputs}
            />
          </form>
        </div>
        <div className="select-wrapper">
          <h2 className="select-title">Dough thickness:</h2>
          <select
            className="select-size"
            name="select_size"
            id="select"
            value={form.select_size}
            onChange={getValueFromInputs}
          >
            <option value={"none"} className="select-options">
              none
            </option>
            <option value={"thin"} className="select-options">
              Thin
            </option>
            <option value={"medium"} className="select-options">
              Medium
            </option>
            <option value={"thick"} className="select-options">
              Thick
            </option>
          </select>
        </div>
        <div className="size-wrapper">
          <h2 className="size-title">Size:</h2>
          <div className="size-list">
            <form>
              <input
                className="size-input-btn"
                type="radio"
                id="25sm"
                name="size"
                value="25sm"
                onChange={getValueFromInputs}
              />
              <label htmlFor="25sm">25sm</label>
              <input
                className="size-input-btn"
                type="radio"
                id="30sm"
                name="size"
                value="30sm"
                onChange={getValueFromInputs}
              />
              <label htmlFor="30sm">30sm</label>
              <input
                className="size-input-btn"
                type="radio"
                id="35sm"
                name="size"
                value="35sm"
                onChange={getValueFromInputs}
              />
              <label htmlFor="35sm">35sm</label>
            </form>
          </div>
        </div>
        <div className="onPizza-wrap">
          <h2 className="onPizza-title">On Pizza:</h2>
          <form className="onPizza-form">
            <div className="onPizza-form-left">
              <div className="onPizza-input-wrap">
                <input
                  name="vehicle1"
                  id="vehicle1"
                  type="checkbox"
                  className="onPizza-input"
                  value="Tomato"
                  onChange={getValueFromInputs}
                />
                <label htmlFor="vehicle1">Tomato</label>
              </div>
              <div className="onPizza-input-wrap">
                <input
                  name="vehicle1"
                  id="vehicle2"
                  type="checkbox"
                  className="onPizza-input"
                  value="Turkey meat"
                  onChange={getValueFromInputs}
                />
                <label htmlFor="vehicle2">Turkey meat</label>
              </div>
              <div className="onPizza-input-wrap">
                <input
                  name="vehicle1"
                  id="vehicle3"
                  type="checkbox"
                  className="onPizza-input"
                  value="Olive"
                  onChange={getValueFromInputs}
                />
                <label htmlFor="vehicle3">Olive</label>
              </div>
            </div>
            <div className="onPizza-form-rigth">
              <div className="onPizza-input-wrap">
                <input
                  name="vehicle1"
                  id="vehicle4"
                  type="checkbox"
                  className="onPizza-input"
                  value="Pickled cucumber"
                  onChange={getValueFromInputs}
                />
                <label htmlFor="vehicle4">Pickled cucumber</label>
              </div>
              <div className="onPizza-input-wrap">
                <input
                  name="vehicle1"
                  id="vehicle5"
                  type="checkbox"
                  className="onPizza-input"
                  value="Mushroom"
                  onChange={getValueFromInputs}
                />
                <label htmlFor="vehicle5">Mushroom</label>
              </div>
              <div className="onPizza-input-wrap">
                <input
                  name="vehicle1"
                  id="vehicle6"
                  type="checkbox"
                  className="onPizza-input"
                  value="Horse meat"
                  onChange={getValueFromInputs}
                />
                <label htmlFor="vehicle6">Horse meat</label>
              </div>
            </div>
          </form>
        </div>
        <div className="add-wrapper">
          <h2 className="add-title">Add:</h2>
          <form className="add-form">
            <div className="add-input-wrap">
              <input
                type="checkbox"
                name="sausages"
                id="pepper"
                value="Pepper"
                onChange={getValueFromInputs}
              />
              <label htmlFor="pepper">Pepper</label>
            </div>
            <div className="add-input-wrap">
              <input
                type="checkbox"
                name="sausages"
                id="sausages"
                value="Sausages"
                onChange={getValueFromInputs}
              />
              <label htmlFor="sausages">Sausages</label>
            </div>
          </form>
        </div>
        <button form="form-wrapper" type="submit" className="order-btn">
          Save
        </button>
      </div>
    </div>
  );
}

export default NewPizzaOrder;
