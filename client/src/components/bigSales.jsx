import Product from "./product";
import { useState, useEffect } from "react";

export default function BigSales() {
  const [bigSales, setBigSales] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/api/bigSales`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setBigSales(data);
      })
      .catch((error) => console.error(error));
  }, []); 

  const bigSalesProducts = bigSales.map((item) => {
    return (
      <Product
        key={item.fields.name} 
        img1={item.fields.img1}
        img2={item.fields.img2}
        img3={item.fields.img3}
        img4={item.fields.img4}
        img5={item.fields.img5}
        name={item.fields.name}
        tag={item.fields.tag}
        type={item.fields.type}
        price={item.fields.price}
        brand={item.fields.brand}
        xs={item.fields.xs}
        l={item.fields.l}
        m={item.fields.m}
        xl={item.fields.xl} 
      />
    );
  });

  return (
    <div className="text-center">
      <h1 className="my-8 text-3xl font-semibold underline">Big Sales</h1>
      <div className="flex items-center justify-center">
        {bigSalesProducts}
      </div>
    </div>
  );
}
