import { useDispatch, useSelector } from 'react-redux'
import {
    CartIconContainer,
    ShoppingIcon,
    CartItemCount,
} from './Cart-Icon.styles.jsx'
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector'
import { setIsCartOpen } from '../../store/cart/cart.action.js';

const CartIcon = () => {
    const dispatch = useDispatch();
    const cartItemCount = useSelector(selectCartCount);
    const IsCartOpen = useSelector(selectIsCartOpen)

    const ToggleCartOpen = () => {
        dispatch(setIsCartOpen(!IsCartOpen))
    }
    return (
        <CartIconContainer>
            <ShoppingIcon className='cart-icon' onClick={ToggleCartOpen} />
            <CartItemCount>{`${cartItemCount}`}</CartItemCount>
        </CartIconContainer>
    )
}

export default CartIcon