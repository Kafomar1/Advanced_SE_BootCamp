import React, { useState } from 'react';

function Card({ data }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (amount) => {
    setQuantity(prevQuantity => Math.max(1, prevQuantity + amount));
  };

  const handleSubmit = () => {
    alert(`Order confirmed: ${quantity} items of ${data.title}`);
  };

  return (
    <div className="card">
      <div className="card-image-container">
        <img src={data.image} alt={data.title} className="card-image" />
      </div>
      <h2>{data.title}</h2>
      <div className="card-description" style={{ backgroundImage: `url(${data.background})` }}>
        <p>{data.description}</p>
      </div>
      <button onClick={() => handleQuantityChange(-1)}>-</button>
      <span>{quantity}</span>
      <button onClick={() => handleQuantityChange(1)}>+</button>
      <button onClick={handleSubmit}>Submit Order</button>
    </div>
  );
}

export default Card;
