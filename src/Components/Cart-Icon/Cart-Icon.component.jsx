import { CartContext } from '../../contexts/cart-context'
import {CartIconContainer,
    ShoppingIcon,
    CartItemCount,
} from './Cart-Icon.styles.jsx'
import { useContext } from 'react'

const CartIcon = () => {
    const {isCartOpen,setIsCartOpen,cartItemCount} = useContext(CartContext)

    const ToggleCartOpen = ()=>{
        setIsCartOpen(!isCartOpen)
    }
    return (
        <CartIconContainer>
            <ShoppingIcon className='cart-icon' onClick={ToggleCartOpen} />
            <CartItemCount>{cartItemCount}</CartItemCount>
        </CartIconContainer>
    )
}

export default CartIcon