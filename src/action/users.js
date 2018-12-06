
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'
export const ADD_USER_ANSWER = 'ADD_USER_ANSWER'

export const addUserQuestion = (authedUser, qid)=>{
    return {
        type: ADD_USER_QUESTION, 
        authedUser, 
        qid
    }
}

export const addUserAnswer = (authedUser, qid)=>{
    return {
        type: ADD_USER_ANSWER, 
        authedUser, 
        qid
    }
}