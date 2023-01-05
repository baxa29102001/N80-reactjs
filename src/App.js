import { useState } from "react";

import Expenses from "./components/expense/Expenses";
import "./App.css";
const fakeData = [
  {
    id: "a1",
    title: "Toilet paper",
    price: "99.9",
    date: {
      year: "2019",
      month: "August",
      day: "29",
    },
  },
  {
    id: "a2",
    title: "New Tv",
    price: "89.9",
    date: {
      year: "2019",
      month: "August",
      day: "29",
    },
  },
  {
    id: "a3",
    title: "New Iphone",
    price: "99.999",
    date: {
      year: "2019",
      month: "August",
      day: "29",
    },
  },
  // {
  //   id: "a1",
  //   title: "Toilet paper",
  //   price: "99.9",
  //   date: {
  //     year: "2019",
  //     month: "August",
  //     day: "29",
  //   },
  // },
];
function App() {
  const [fake_data, setFake_data] = useState(fakeData);

  const sliceArrayHandler = () => {
    let arr2 = fake_data.slice(0, 1);

    setFake_data(arr2);
  };

  return (
    <>
      <div className="expenses">
        <Expenses expenses={fake_data} />
        <button onClick={sliceArrayHandler}>Change array</button>
      </div>
    </>
  );
}

export default App;
