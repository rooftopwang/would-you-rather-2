import { _getUsers, _getQuestions } from '../DataBase/_DATA.js'
import {initPolls} from './initPolls'
import {initUsers} from './initUsers'
import { _saveQuestionAnswer, _saveQuestion, _register } from '../DataBase/_DATA.js'
import { addPoll, votePoll } from './poll'
import { addUserQuestion, addUserAnswer } from './users'
export const handleInitData = () => {
    return (dispatch) => {
        return Promise.all([_getUsers(), _getQuestions()]).then(([users, polls])=>{
            dispatch(initPolls(polls));
            dispatch(initUsers(users));
        })
        
        
    }
}

export const saveQuestionAnswer = ( qid, answer )=>{
    return (dispatch, getState) => {
        const {authedUser} = getState();
        
        return _saveQuestionAnswer({ authedUser, qid, answer }).then(()=>{
            dispatch(addUserAnswer(authedUser, qid, answer)); 
            dispatch(votePoll(authedUser, qid, answer)); 
            dispatch(handleInitData())
        })
    }
}

export const saveQuestion = ( optionOneText, optionTwoText ) =>{
    return (dispatch, getState)=>{
        const {authedUser} = getState();
        return _saveQuestion({
          optionOneText, 
          optionTwoText,
          author: authedUser
        }).then((formatted)=>{
            dispatch(addPoll(formatted));
            dispatch(addUserQuestion(authedUser, formatted.id))
        })
    }
}

export const register = (firstname, lastname, avatarURL)=>{
    return (dispatch)=>{
        return _register({firstname, lastname, avatarURL}).then((res)=>{
            dispatch(handleInitData());
        })
    }
}