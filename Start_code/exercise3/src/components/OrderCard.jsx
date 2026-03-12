import React from "react";

export default function OrderCard({order, incQuantity, decQuantity}) {
  const isDisabled = order.quantity === 0;
  
  return (
    <div className="order">
      <div>
        <h4>{order.product}</h4>
        <small>${order.price.toFixed(2)}</small>
      </div>

      <div className="order-quantity">
        <div
          className={`order-button ${isDisabled ? "disable" : ""}`}
          onClick={isDisabled ? undefined : decQuantity}
          aria-disabled={isDisabled}
        >
          -
        </div>
        <h4>{order.quantity}</h4>
        <div className="order-button" onClick={incQuantity}>+</div>
      </div>
    </div>
  );
}
