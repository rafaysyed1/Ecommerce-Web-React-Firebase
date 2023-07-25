import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../Category/Category.component';
import { getCollectionAndDoc } from '../../Utils/Firebase/Firebase.utils';
import { setCategories, setCategoriesMap } from '../../store/categories/category.action';
import { useDispatch } from 'react-redux';
import {useEffect}  from'react'
const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getProductCategoryMap = async () => {
      const categoriesArray = await getCollectionAndDoc();
      console.log(categoriesArray);
      dispatch(setCategories(categoriesArray));
    }
    getProductCategoryMap();
  },[]);
  return (
    <Routes>
      <Route path="/" element={<CategoriesPreview />} />
      <Route path="/:category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
