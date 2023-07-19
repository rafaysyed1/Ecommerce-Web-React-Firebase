import { useContext } from 'react';
import Button,{buttonTypeClasses} from '../button/Button.component'
import { CartContext } from '../../contexts/cart-context';
import { Footer, ProductCardContainer, ProductName, ProductPrice } from './Product-card.styles';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemtoCart} = useContext(CartContext)
    const AddproducttoCard = () => {
        addItemtoCart(product)
    }
   
    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`} />
            <Footer>
                <ProductName>{name}</ProductName>
                <ProductPrice>{price}</ProductPrice>
            </Footer>
            <Button buttonType={buttonTypeClasses.inverted} onClick={AddproducttoCard} >Add to Cart</Button>
        </ProductCardContainer>
    )
}

export default ProductCard