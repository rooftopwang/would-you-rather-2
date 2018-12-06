import authedUser from './authedUser';
import polls from './questions';
import users from './users';
import {combineReducers} from 'redux'

export default combineReducers({
    polls, 
    authedUser,
    users
})