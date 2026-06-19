"use client";

import { useState } from "react";
import { ProductsData } from "/data/ProductsData";

// client component
const ShowProduct = ({ id }) => {
  const [count, setCount] = useState(100);
  const product = ProductsData.filter((item) => item.id === parseInt(id));
  return (
    <div>
      List of the products <hr />
      count = {count}
      <hr />
      {JSON.stringify(product)}
    </div>
  );
};

export default ShowProduct;
