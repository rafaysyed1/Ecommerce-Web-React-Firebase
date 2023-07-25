import { createAction } from "../../Utils/Reducer/reducer.utils"
import { CATEGORIS_ACTION_TYPES } from "./category.types"
export const setCategories = (categoriesArray)=>{
    return createAction(CATEGORIS_ACTION_TYPES.SET_CATEGORIES,categoriesArray)
}