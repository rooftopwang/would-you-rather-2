export const RECEIVE_USERS = 'RECEIVE_USERS'

export const initUsers = (users) => ({
    type: RECEIVE_USERS, 
    users
})