import './checkout-item.styles.jsx';
import { Arrow, CheckoutImageContainer, CheckoutItemContainer, CheckOutProductName, CheckOutProductPrice, CheckOutProductQuantity,CheckOutRemoveButton } from './checkout-item.styles.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector.js';
import { addItemToCartHandler,clearItemFromCart,removeCartItem,removeCartItemHandler } from '../../store/cart/cart.action.js';



const CheckoutItem = ({ cartItem }) => {

  const { name, imageUrl, quantity, price } = cartItem;
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch();

  const addCartItemHandler = () => {
    dispatch(addItemToCartHandler(cartItems,cartItem));
  };

  const removeCartItemHandler = () => {
    dispatch(removeCartItem(cartItems,cartItem));
  };

  const clearCartHandler = () => {
    dispatch(clearItemFromCart(cartItems ,cartItem));
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
