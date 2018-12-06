export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT = 'USER_LOGOUT'

export const authedUserLogin = (id)=>(
    {
        type: USER_LOGIN, 
        id
    }
)

export const authedUserLogout = ()=>(
    {
        type: USER_LOGOUT
    }
)
