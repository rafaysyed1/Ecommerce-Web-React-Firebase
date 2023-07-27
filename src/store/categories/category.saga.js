import { all, call, put, takeLatest } from 'redux-saga/effects'
import { categorygetCollectionAndDoc } from '../../Utils/Firebase/Firebase.utils'
import { fetchCategoriesSuccess, fetchCategoriesFailed } from './category.action'
import { CATEGORIS_ACTION_TYPES } from './category.types'


export function* fetchCategoriesAsync() {
    try {
        const categoriesArray = yield call(categorygetCollectionAndDoc, 'categories');
        yield put(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
        yield put(fetchCategoriesFailed(error));
    }
}



export function* onFetchCategories() {
    yield takeLatest(CATEGORIS_ACTION_TYPES.FETCH_CATEGORIES_START,fetchCategoriesAsync);
}

export function* CategoriesSaga() {
    yield all([call(onFetchCategories)]);
}