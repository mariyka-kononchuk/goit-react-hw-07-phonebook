//with Redux Toolkit
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit'
import {fetchContacts} from './contacts-api'
//import data from '../../../src/data/contacts.json';
import {
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
    changeFilter
} from './contacts-action'

const items = createReducer([], {
    [fetchContactSuccess]:(_, {payload}) => payload,
    [addContactSuccess]: (state, {payload}) => [payload, ...state],
    [deleteContactSuccess]: (state, {payload}) =>
        state.filter(({id}) => id !== payload)
})

const filter = createReducer('', {
   [changeFilter]:(_, {payload}) => payload, 
})

export default combineReducers({
    items,
    filter
});

