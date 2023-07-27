import { createAction } from "../../Utils/Reducer/reducer.utils"
import { CATEGORIS_ACTION_TYPES } from "./category.types"
import {categorygetCollectionAndDoc } from "../../Utils/Firebase/Firebase.utils";


export const fetchCategoriesStart = ()=> (createAction(
    CATEGORIS_ACTION_TYPES.FETCH_CATEGORIES_START)
);
export const fetchCategoriesSuccess = (categoriesArray)=> (createAction(
    CATEGORIS_ACTION_TYPES.FETCH_CATEGORIES_SUCSESS,categoriesArray)
);
export const fetchCategoriesFailed = (error)=> (createAction(
    CATEGORIS_ACTION_TYPES.FETCH_CATEGORIES_FAILED,error)
);

