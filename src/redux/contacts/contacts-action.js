//without Redux Toolkit
import { createAction } from '@reduxjs/toolkit';

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');



export const deleteContact = createAction('app/deleteContact');
export const changeFilter = createAction('app/changeFilter');

    


