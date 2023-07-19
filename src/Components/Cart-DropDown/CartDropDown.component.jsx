import { useContext } from 'react'
import Button from '../../Components/button/Button.component'
import CartItem from '../cart-item/cart-item.component'
import {
    CartDropDownContainer,
    EmptyMessage,
    CartItems,


} from './CartDropDown.styles.jsx'
import { CartContext } from '../../contexts/cart-context'
import { useNavigate } from 'react-router-dom'
const CartDropDown =()=>{
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();
    const NavigatetoCheckout =()=>{
        navigate('/checkout')
    }
    return(
        <CartDropDownContainer>
        <CartItems>
        {
            cartItems.length ? (cartItems.map(item => 
                <CartItem key={item.id} CartItem={item}/>)
            ):(
                <EmptyMessage>Your Cart is Empty</EmptyMessage>
            )
}
        </CartItems>
        <Button onClick = {NavigatetoCheckout}>CHECKKOUT</Button>
        </CartDropDownContainer>
    )
}
export default CartDropDown