import { Fragment } from 'react';

import CategoryPreview from '../../Components/category-preview/category-preview.component';
import { useSelector } from 'react-redux';
import { selectCategoriesMap, selectCatrgoriesIsLoading } from '../../store/categories/category.selector';
import Spinner from '../../Components/spinner/spinner.component';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectCatrgoriesIsLoading)

  return (
    <Fragment className='category-preview-container'>
        {
        isLoading ? <Spinner/> :
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} product={products} /> // Corrected 'product' to 'products'
          );
        })}
      </Fragment>
  );
};

export default CategoriesPreview
