import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./rootReducer";
//root reducer

const persistConfig = {
    key: "root", 
    storage: storage, 
    blacklist: ['user']
}//blacklist user becuase its coming from authstatelistener anyway

const persistedReducer = persistReducer(persistConfig, rootReducer);

const loggerMiddleware = (store) => (next) => (action) =>{
    if(!action.type) {
        return next(action);
    }

    console.log("type: ", action.type);
    console.log("payload: ", action.payload); 
    console.log("currentState: ", store.getState());

    next(action);

    console.log("nextState: ", store.getState());
    
}

const middleWares = [process.env.NODE_ENV === "development" && logger].filter(Boolean);

const composedEnhancers = compose(applyMiddleware(...middleWares));

//const store = createStore(rootReducer, undefined, composedEnhancers);
export const store = createStore(persistedReducer, undefined, composedEnhancers);
export const persistor = persistStore(store);

