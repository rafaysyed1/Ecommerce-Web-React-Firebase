import { CartItemContainer, CartItemDetails, ItemName } from './cart-item.styles.jsx'
const CartItem =({CartItem})=>{
    const {name ,imageUrl,price,quantity}= CartItem
    return (
        <CartItemContainer>
       <img src={imageUrl} alt={`${name}`} />
       <CartItemDetails>
       <ItemName>{name}</ItemName>
        <span className='price'>{quantity} X ${price}</span>
       </CartItemDetails>
        
        </CartItemContainer>
    )
}
export default CartItem