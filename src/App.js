import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import NewPizzaOrder from "./components/NewPizzaOrder";

function App() {
  const [data, setData] = useState([]);

  const pushNewOrder = (data) => {
    setData((prev) => [data, ...prev]);
  };

  return (
    <>
      <div className="">
        <NewPizzaOrder onAddData={pushNewOrder} />
        <div className="orders_card">
          {data.map((item) => {
            return <Cards item={item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
