import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { CartContext } from '../../contexts/cart-context'
import './Cart-Icon.styles.scss'
import { useContext } from 'react'

const CartIcon = () => {
    const {isCartOpen,setIsCartOpen} = useContext(CartContext)

    const ToggleCartOpen = ()=>{
        setIsCartOpen(!isCartOpen)
    }
    return (
        <div className='cart-icon-container'>
            <ShoppingIcon className='cart-icon' onClick={ToggleCartOpen} />
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon