//with Redux Toolkit
import { configureStore, getDefaultMiddleware, combineReducers } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
//import storage from 'redux-persist/lib/storage';
import contactsReducer from './contacts/contacts-reducer';

// const myMiddleware = store => next => action => {
//     console.log('Моя прослойка')
// }

//for watching prevState, action, nextState in console
const middleware = [...getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
}),
    logger]

//localStorage
// const persistConfig = {
//     key: 'contacts',
//     storage
// }

const rootReducer = combineReducers({
    contacts: contactsReducer,
})

const persistedReducer = rootReducer

const store = configureStore({
    reducer: persistedReducer, 
    middleware,
    devTools: process.env.NODE_ENV === 'development',
})
//обертка над store, которая реализует обновление LocalStorage
//const persistor = persistStore(store);

export default store;

