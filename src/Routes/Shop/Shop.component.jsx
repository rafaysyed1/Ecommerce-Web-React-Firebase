import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../Category/Category.component';
import { fetchCategoriesStart } from '../../store/categories/category.action';
import {useEffect}  from'react'
import { useDispatch } from 'react-redux';
const Shop = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    
      dispatch(fetchCategoriesStart());
    },[]);
  return (
    <Routes>
      <Route path="/" element={<CategoriesPreview />} />
      <Route path="/:category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
