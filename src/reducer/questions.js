import {GET_POLLS} from '../action/initPolls.js'
import { ADD_POLL, VOTE_POLL } from '../action/poll'

const questions = (state = {}, action) => {
    switch (action.type) {
        case GET_POLLS : 
        return {
            ...state, 
            ...action.polls
        };

        case ADD_POLL : 
        const {poll} = action; 
        return {
            ...state, 
            [poll.id] : poll
        }; 
        case VOTE_POLL : 
        const { authenUser, pollId, answer} = action
        return {
            ...state, 
            [pollId]: {
                ...state[pollId], 
                [answer] : {
                    ...state[pollId][answer], 
                    // votes: [...state[pollId][answer][votes], authenUser]
                    votes: state[pollId][answer]["votes"].concat(authenUser)
                }
            }
        }; 
        default :
        return state; 
    }
}

export default questions; 