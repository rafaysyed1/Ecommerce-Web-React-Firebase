import {compose,createStore,applyMiddleware} from 'redux'
import { persistStore,persistReducer } from 'redux-persist'
import { rootReducer } from './root-reducer'
import  storage  from 'redux-persist/lib/storage'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './root-saga'
const persistConfig = {
    key: 'root',
    storage,
    whitelist :['cart'],
}
const sagaMiddleWare=createSagaMiddleware(); //middleware for handling side effects like api calls and

const persistedReducer = persistReducer(persistConfig,rootReducer)
const middlewares =  [process.env.NODE_ENV !== 'production' && logger,
sagaMiddleWare].filter(Boolean);

const composeEnhancer =(process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXNTENSION_COMPOSE__) || compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares))


export const store = createStore(persistedReducer,undefined,composedEnhancers)
export const persistor = persistStore(store);
sagaMiddleWare.run(rootSaga);
//root reducers = combination of all reducers...

