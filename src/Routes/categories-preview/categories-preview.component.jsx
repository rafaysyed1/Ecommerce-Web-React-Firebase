import { Fragment } from 'react';

import CategoryPreview from '../../Components/category-preview/category-preview.component';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap)

  return (
    <Fragment className='category-preview-container'>
        {Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} product={products} /> // Corrected 'product' to 'products'
          );
        })}
      </Fragment>
  );
};

export default CategoriesPreview
