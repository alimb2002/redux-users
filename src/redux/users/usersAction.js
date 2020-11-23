import {
    FETCH_USERS_REQUEST , 
    FETCH_USERS_SUCCESS , 
    FETCH_USERS_FAILURE } from './usersTypes';
import Axios from 'axios';

export const fetchUserRequest = () => {
    return {
        type : FETCH_USERS_REQUEST
    }
}

const fetchUserSuccess = user => {
    return {
        type : FETCH_USERS_SUCCESS,
        payload : user
    }
}

const fetchUserFailure = error => {
    return {
        type : FETCH_USERS_FAILURE,
        payload : error
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest);
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then( response => {
            const users = response.data
            dispatch(fetchUserSuccess(users))
        })
        .catch( error => {
            const errorMsg = error.message;
            dispatch(fetchUserFailure(errorMsg));
        } )
    }
}