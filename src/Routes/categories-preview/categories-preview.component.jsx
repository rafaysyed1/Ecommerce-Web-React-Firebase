import  { useContext,fragment} from 'react';
import { CategoriesContext } from '../../contexts/categories-context';
import CategoryPreview from '../../Components/category-preview/category-preview.component';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <fragment className='category-preview-container'>
        {Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} product={products} /> // Corrected 'product' to 'products'
          );
        })}
      </fragment>
  );
};

export default CategoriesPreview
