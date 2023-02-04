import React, { useState, useCallback, useMemo } from "react";
import Button from "./components/Button";
import List from "./components/List";
import Paragraph from "./components/Paragraph";

function App() {
  const [title, setTitle] = useState("Title");
  const [toggle, setToggle] = useState(false);
  // const changeTitleHandler = useCallback(() => {
  //   setTitle((prev) => prev + "hi");
  // }, []);

  const memoreizedArray = useMemo(() => {
    return [1, 3, 4, 6];
  }, []);

  return (
    <div>
      <h2>{title}</h2>
      <List list={memoreizedArray} />

      <button
        onClick={() => {
          setTitle((prev) => prev + "hi");
        }}
      >
        Bosilsin
      </button>
    </div>
  );
}

export default App;
