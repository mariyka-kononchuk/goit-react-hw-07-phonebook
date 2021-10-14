import axios from 'axios';
import {
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError
} from './contacts-action'

axios.defaults.baseURL = 'http://localhost:4040';

export const addContact = ({ name, number }) => dispatch => {
    const contact = {
        name,
        number
    }

    dispatch(addContactRequest());

    axios
        .post('/contacts', contact)
        .then(({ data }) => dispatch(addContactSuccess(data)))
        .catch(error => dispatch(addContactError(error)));
}

export const deleteContact = contactId => dispatch => {
    console.log(contactId)
    dispatch(deleteContactRequest());

    axios
        .delete(`/contacts/${contactId}`)
        .then(() => dispatch(deleteContactSuccess(contactId)))
        .catch(error => dispatch(deleteContactError(error)));
}

