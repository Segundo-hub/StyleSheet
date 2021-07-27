import { writable } from 'svelte/store';

const getUser = () => (
    localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user'))
        : null
)

const UserAuth = () => {
    const { subscribe, set } = writable(getUser());
    return {
        subscribe,
        userLogin: (arg) => set(arg),
        logoutUser: () => set(null)
    }
}

const user = () => (
    localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user'))
        : {}
)

export const setAuthContext = (newuser, token) => {
    localStorage.setItem('user', JSON.stringify(newuser));
    localStorage.setItem('token', token);
}

export const AuthContext = UserAuth()
export const User = user()
export const getUsers = getUser

