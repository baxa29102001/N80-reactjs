import React from "react";

function Cards({ item }) {
  return (
    <div className="price-wrapper">
      <h1 className="price-title">
        Order: <span>{item.id}</span>
      </h1>
      <div className="form-info">
        <h3 className="user-name">
          Name: <span>{item.name}</span>
        </h3>
        <h3 className="user-number">
          Phone: <span>{item.phoneNumber}</span>
        </h3>
        <h3 className="user-address">
          Address: <span>{item.address}</span>
        </h3>
      </div>
      <div className="type-info">
        <h3 className="dough">
          Dough thickness: <span>{item.select_size}</span>
        </h3>
        <h3 className="size">
          Size: <span>{item.size}</span>
        </h3>
        <h3 className="onPizza">
          On Pizza: <span>{item.vehicle1.join(" ")}</span>
        </h3>
        <h3 className="add">
          Add: <span>{item.sausages.join(" ")}</span>
        </h3>
      </div>
      <h2 className="total">Total: ${item.totalSum  }</h2>
    </div>
  );
}

export default Cards;
