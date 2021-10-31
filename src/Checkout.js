import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {

  const [{basket}, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv1p6HQcwl799LrBvYfhGd3pDqBpnyWV5xUQ&usqp=CAU"
        />
        <div>
          <h2 className="checkout_title">Your shopping Basket</h2>

          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout
