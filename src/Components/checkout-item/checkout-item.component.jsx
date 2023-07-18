import { useContext } from 'react';
import './checkout-item.styles.scss';
import { CartContext } from '../../contexts/cart-context';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  const { clearItemFromCart,  addItemtoCart, removeCartItem } = useContext(CartContext);

  const addCartItemHandler = () => {
    addItemtoCart(cartItem);
  };

  const removeCartItemHandler = () => {
    removeCartItem(cartItem);
  };

  const clearCartHandler = () => {
    clearItemFromCart(cartItem);
  };

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={removeCartItemHandler}>
          &#10094;
        </div>
        {quantity}
        <div className='arrow' onClick={addCartItemHandler}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={clearCartHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
