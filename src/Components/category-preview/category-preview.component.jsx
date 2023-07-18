import ProductCard from '../ProductCard/Product-card.component'
import './category-preview.styles.scss'
import { Link } from 'react-router-dom';
const CategoryPreview = ({ title, product }) => {
    return (
        <div className='category-preview-container'>
            <h2>
              <Link className='title' to={title}>  <span>{title.toUpperCase()}</span></Link>
            </h2>
            <div className='preview'>
            {
                product.filter((_,idx)=> idx<4)
                .map((product)=>
                <ProductCard key={product.id} product={product}/>)                       //idx === index
            }
            </div>
        </div>
    )
}

export default CategoryPreview