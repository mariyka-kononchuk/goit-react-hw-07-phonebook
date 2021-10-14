//with Redux Toolkit
import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = ({ name, number }) => dispatch => {
    
}

// export const addContact = createAction('app/addContact', ({name,number}) => ({
//     payload: {
//         id: uuidv4(),
//         name,
//         number
//     }   
// }))

export const deleteContact = createAction('app/deleteContact');
export const changeFilter = createAction('app/changeFilter');

    


