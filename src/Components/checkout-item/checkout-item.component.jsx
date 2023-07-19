import { useContext } from 'react';
import './checkout-item.styles.jsx';
import { CartContext } from '../../contexts/cart-context';
import { Arrow, CheckoutImageContainer, CheckoutItemContainer, CheckOutProductName, CheckOutProductPrice, CheckOutProductQuantity,CheckOutRemoveButton } from './checkout-item.styles.jsx';

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
    <CheckoutItemContainer>
      <CheckoutImageContainer>
        <img src={imageUrl} alt={name} />
      </CheckoutImageContainer>
      <CheckOutProductName>{name}</CheckOutProductName>
      <CheckOutProductQuantity>
       <Arrow onClick={removeCartItemHandler}>
          &#10094;
        </Arrow>
        {quantity}
        <Arrow onClick={addCartItemHandler}>
          &#10095;
        </Arrow>
      </CheckOutProductQuantity>
      <CheckOutProductPrice>{price}</CheckOutProductPrice>
      <CheckOutRemoveButton onClick={clearCartHandler}>
        &#10005;
      </CheckOutRemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
