import React from "react";

function List(props) {
  console.log("List is Running");
  return (
    <div>
      <h3>New title</h3>
      <ul>
        {props.list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default React.memo(List);
