import Button,{buttonTypeClasses} from '../button/Button.component'
import { Footer, ProductCardContainer, ProductName, ProductPrice } from './Product-card.styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCartHandler } from '../../store/cart/cart.action';
const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems)
    const { name, price, imageUrl } = product;
    const AddproducttoCart = () => {
        dispatch(addItemToCartHandler(cartItems,product))
    }
   
    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`} />
            <Footer>
                <ProductName>{name}</ProductName>
                <ProductPrice>{price}</ProductPrice>
            </Footer>
            <Button buttonType={buttonTypeClasses.inverted} onClick={AddproducttoCart} >Add to Cart</Button>
        </ProductCardContainer>
    )
}

export default ProductCard