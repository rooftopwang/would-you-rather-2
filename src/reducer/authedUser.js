import { USER_LOGIN, USER_LOGOUT } from '../action/authedUser'
const authedUser = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN : return action.id;
        case USER_LOGOUT : return {}; 
        default : return state; 
    }
}
export default authedUser; 