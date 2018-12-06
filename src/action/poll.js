export const ADD_POLL = 'ADD_POLL'
export const VOTE_POLL = 'VOTE_POLL'

export const addPoll = (poll)=>{
    return {
        type: ADD_POLL, 
        poll
    }
}

export const votePoll = ( authenUser, pollId, answer )=>{
    return {
        type: VOTE_POLL, 
        authenUser, 
        pollId, 
        answer
    }
}