import { Fragment, useEffect, useState } from 'react';
import { CategoryTitle, CategoryContainer } from './Category.styles.jsx';
import { useParams } from 'react-router-dom';
import Spinner from '../../Components/spinner/spinner.component.jsx'
import ProductCard from '../../Components/ProductCard/Product-card.component';
import { useSelector } from 'react-redux';
import { selectCategoriesMap, selectCatrgoriesIsLoading } from '../../store/categories/category.selector.js';

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectCatrgoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);
  console.log(categoriesMap);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {isLoading ? (<Spinner />) : (
        <CategoryContainer>

          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}

    </Fragment>
  );
};

export default Category;
