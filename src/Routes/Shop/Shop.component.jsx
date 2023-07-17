import React, { useContext } from 'react';
import { ProductContext } from '../../contexts/product-context';
import ProductCard from '../../Components/ProductCard/Product-card.component';
import './Shop.styles.scss'

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
  <div className='products-container'>
    {products.map((product)=>(
      <ProductCard key={product.id} product = {product} />
    ))}
  </div>
  )
    }
export default Shop
