import { useContext } from 'react'
import Button from '../../Components/button/Button.component'
import CartItem from '../cart-item/cart-item.component'
import './CartDropDown.styles.scss'
import { CartContext } from '../../contexts/cart-context'
const CartDropDown =()=>{
    const {cartItems} = useContext(CartContext);
    return(
        <div className="cart-dropdown-container">
        <div className="cart-items">
        {cartItems.map(item => 
        <CartItem key={item.id} CartItem={item}/>)
        }
        </div>
        <Button>CHECKKOUT</Button>
        </div>
    )
}
export default CartDropDown