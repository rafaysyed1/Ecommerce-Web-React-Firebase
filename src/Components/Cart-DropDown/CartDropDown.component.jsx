import { useContext } from 'react'
import Button from '../../Components/button/Button.component'
import CartItem from '../cart-item/cart-item.component'
import './CartDropDown.styles.scss'
import { CartContext } from '../../contexts/cart-context'
import { useNavigate } from 'react-router-dom'
const CartDropDown =()=>{
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();
    const NavigatetoCheckout =()=>{
        navigate('/checkout')
    }
    return(
        <div className="cart-dropdown-container">
        <div className="cart-items">
        {cartItems.map(item => 
        <CartItem key={item.id} CartItem={item}/>)
        }
        </div>
        <Button onClick = {NavigatetoCheckout}>CHECKKOUT</Button>
        </div>
    )
}
export default CartDropDown