import { RECEIVE_USERS } from './types'
import { ADD_USER_QUESTION } from './types'
import { ADD_USER_ANSWER } from './types'


export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function addUserQuestion(user, qid) {
    return {
        type: ADD_USER_QUESTION,
        user,
        qid
    }
}

export function addUserAnswer(user, qid, answer) {
    return {
        type: ADD_USER_ANSWER,
        user,
        qid,
        answer
    }
}