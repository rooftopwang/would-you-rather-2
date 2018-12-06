import {RECEIVE_USERS} from '../action/initUsers.js'
import { ADD_USER_QUESTION, ADD_USER_ANSWER } from '../action/users'


const users = (state = {}, action) => {
    switch (action.type){
        case RECEIVE_USERS: 
        return {
            ...state, 
            ...action.users
        };
        case ADD_USER_QUESTION: 
        return {
            ...state, 
            [action.authedUser]: {
                ...state[action.authedUser],
                questions: state[action.authedUser].questions.concat([action.qid])
            }
        }; 
        case ADD_USER_ANSWER: 
        return {
            ...state, 
            [action.authedUser]: {
                ...state[action.authedUser], 
                questions: state[action.authedUser].questions.concat([action.qid])
            }
        }
        default: 
        return state; 
    }
}

export default users;