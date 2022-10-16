import React from "react";

const Product = ({
  cart,
  handleAddCart,
  kilo,
  setKilo,
  amountInCart,
  setAmountInCart,
  name,
  price,
  picture,
  description,
}) => {
  const sentence = name;
  const words = sentence.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
    letter.toUpperCase()
  );

  const handleChange = (e) => {
    setKilo({ value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAmountInCart(amountInCart + 1);
    handleAddCart(name, picture, kilo.value, price);
  };

  return (
    <div className="container">
      <div className="product">
        <div className="product-header">
          <h2>{words}</h2>
        </div>
        <div className="product-content">
          <img src={picture} alt={name} />
          <p>{description}</p>
        </div>
        <div className="product-buy">
          <p>{price}₺ (kg)</p>
          <form onSubmit={handleSubmit}>
            How many kilos would you like?
            <select value={kilo.value} onChange={handleChange}>
              <option value="1000">1kg</option>
              <option value="100">100gr</option>
              <option value="250">250gr</option>
              <option value="500">500gr</option>
              <option value="2000">2kg</option>
              <option value="5000">5kg</option>
            </select>
            <input type="submit" value="Add to Cart" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Product;
