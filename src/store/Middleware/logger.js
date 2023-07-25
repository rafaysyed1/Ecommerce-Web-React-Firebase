export const loggerMiddleware = (store)=>(next)=>(action)=>{
    if (!action.type) {
        return next(action)
    }
    console.log("Type :",action.type);
    console.log("PayLoad :",action.payload);
    console.log("Current State",store.getState());
    next(action);
    console.log("New state",store.getState());
}