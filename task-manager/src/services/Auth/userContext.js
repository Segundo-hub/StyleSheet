import { writable } from 'svelte/store';

import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/users';
const BASE_HEADERS = {
    'Content-Type': 'application/json'
}

/** 
*   @param {Object} contain {username, email, password}.
*   @return {Promise:<Object>} with {tojen, }
*/

export const setUserAccount = async (user = {}) => {
    if(typeof user == 'undefined') throw Error('Especicific user argument') 

    const { data, status } = await axios.post(BASE_URL + '/register', {
        username: user.username,
        email: user.email,
        password: user.password
    }, BASE_HEADERS );
    return {
        data, status
    }
}

export const getUserAccount = async (user = {}) => {
    const { data, status } = await axios.post(BASE_URL + '/login', {
        
    }, BASE_HEADERS)
}