import axios from 'axios';
import {
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError
} from './contacts-action'

axios.defaults.baseURL = 'http://localhost:4040';

export const fetchContacts = () => dispatch => {
    dispatch(fetchContactRequest());
    axios
        .get('/contacts')
        .then(({ data }) => dispatch(fetchContactSuccess(data)))
        .catch(error => dispatch(fetchContactError(error)))
}

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

