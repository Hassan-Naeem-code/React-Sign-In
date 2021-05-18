// import rootReducer from './reducer/index';
// import thunk from 'redux-thunk';
// import {createStore,applyMiddleware} from 'redux';

// const store=createStore(
//     rootReducer,{},applyMiddleware(thunk)

// )

// export default store;

import rootReducer from './reducer/index';
import {createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const enhancer = compose(applyMiddleware(thunk));

const persistConfig = {
  key: 'root',
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


let store = createStore(persistedReducer,enhancer);
export let persistor = persistStore(store);
// export default () => {
//   return {store, persistor};
// };

// const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export default store;
