import ProductCard from '../ProductCard/Product-card.component'
import {CategoryPreviewContainer,CategoryPreviewStyle,CategoryTitle}  from'./category-preview.styles.jsx'
const CategoryPreview = ({ title, product }) => {
    return (
        <CategoryPreviewContainer>
            <h2>
              <CategoryTitle to={title}>  <span>{title.toUpperCase()}</span></CategoryTitle>
            </h2>
            <CategoryPreviewStyle>
            {
                product.filter((_,idx)=> idx<4)
                .map((product)=>
                <ProductCard key={product.id} product={product}/>)                       //idx === index
            }
            </CategoryPreviewStyle>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview