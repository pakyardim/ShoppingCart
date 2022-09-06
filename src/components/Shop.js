import React from "react";
import { Link } from "react-router-dom";
import products from "./products";
import { nanoid } from "nanoid";


const Shop = () => {


  const Card = ({ e }) => {
    return (
      <li>
        <Link to={`/shop/${e.name.replaceAll(" ", "")}`}>
          <div className="img-container">
            <img src={e.image} alt="e.image" />
          </div>
          <p className="price">{`${e.price} ₺`}</p>
          <p className="name">{e.name}</p>
        </Link>
      </li>
    )
  };

  return (
    <div className="container">
        <ul className="cards">
          {products.map((e) => {
            return <Card key={nanoid()} e={e} />;
          })}
        </ul>
    </div>
  );
};

export default Shop;
