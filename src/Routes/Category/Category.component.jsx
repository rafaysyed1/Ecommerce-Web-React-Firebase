import { Fragment,useEffect, useState } from 'react';
import {CategoryTitle,CategoryContainer} from'./Category.styles.jsx';
import { useParams } from 'react-router-dom';

import ProductCard from '../../Components/ProductCard/Product-card.component';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector.js';

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap)
  const [products, setProducts] = useState(categoriesMap[category]);
  console.log(categoriesMap);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>

        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
