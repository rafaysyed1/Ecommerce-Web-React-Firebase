import { Fragment, useContext, useEffect, useState } from 'react';
import {CategoryTitle,CategoryContainer} from'./Category.styles.jsx';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories-context';
import ProductCard from '../../Components/ProductCard/Product-card.component';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
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
