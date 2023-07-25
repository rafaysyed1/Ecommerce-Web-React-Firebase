import {compose,createStore,applyMiddleware} from 'redux'
// import {persistStore,persistReducer} from 'redu'
import { rootReducer } from './root-reducer'
const loggerMiddleware = (store)=>(next)=>(action)=>{
    if (!action.type) {
        return next(action)
    }
    console.log("Type :",action.type);
    console.log("PayLoad :",action.payload);
    console.log("Current State",store.getState());
    next(action);
    console.log("New state",store.getState());
}
const middlewares =  [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middlewares))

export const store = createStore(rootReducer,undefined,composedEnhancers)

//root reducers = combination of all reducers...

