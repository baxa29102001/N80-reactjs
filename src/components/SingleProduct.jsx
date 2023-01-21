import React from "react";

import { useParams } from "react-router-dom";

function SingleProduct() {
  const id = useParams();

  console.log(id);

  return <div>SingleProduct {id.id}</div>;
}

export default SingleProduct;
