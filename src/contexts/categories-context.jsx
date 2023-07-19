import { createContext, useState, useEffect } from "react";
import { getCollectionAndDoc } from "../Utils/Firebase/Firebase.utils";


export const CategoriesContext = createContext({
  categoriesMap: {}
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  useEffect(() => {
    const getProductCategoryMap = async () => {
      const CategoryMap = await getCollectionAndDoc();
      setCategoriesMap(CategoryMap)
    }
    getProductCategoryMap();
  },[]);
  
  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
