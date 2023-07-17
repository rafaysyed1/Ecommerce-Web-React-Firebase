import { useContext } from 'react';
import Button from '../button/Button.component'
import './Product.styles.scss'
import { CartContext } from '../../contexts/cart-context';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemtoCart} = useContext(CartContext)
    const AddproducttoCard = () => {
        addItemtoCart(product)
    }
   
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType={'inverted'} onClick={AddproducttoCard} >Add to Cart</Button>
        </div>
    )
}

export default ProductCard