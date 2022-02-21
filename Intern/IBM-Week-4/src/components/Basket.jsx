import React from 'react';
import './Basket.css';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + shippingPrice;
  return (
    <aside className="block col-1" id='cart'>
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x INR {item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">INR {itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price*</div>
              <div className="col-1 text-right">
              INR {shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>INR {totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert('Proceeding to checkout')}>
                Checkout
              </button>
            </div>
            <div className="end"><small>*Shipping price applicable for products under price of INR 2000 and varies for local and outstation deliveries </small></div>
          </>
        )}
      </div>
    </aside>
  );
}