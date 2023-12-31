import {CheckoutContainer,CheckoutHeader,HeaderBlock,Total} from './Checkout.styles.jsx';
import CheckoutItem from '../../Components/checkout-item/checkout-item.component';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector.js';
const Checkout = () => {
 const cartItems = useSelector(selectCartItems);
 const cartTotal = useSelector(selectCartTotal);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>

      {cartItems && cartItems.map((cartItem) => (
  <CheckoutItem key={cartItem.id} cartItem={cartItem} />
))}


      <Total>Total: ${`${cartTotal}`}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;


