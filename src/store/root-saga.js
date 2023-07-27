import {all,call} from 'redux-saga/effects'
import { CategoriesSaga } from './categories/category.saga'
import { userSagas } from './user/user.saga'
export function* rootSaga(){
    yield all([call(CategoriesSaga),,call(userSagas)])
}