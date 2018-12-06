export const GET_POLLS = 'GET_POLLS'

export const initPolls = (polls) => ({
    type: GET_POLLS, 
    polls
})