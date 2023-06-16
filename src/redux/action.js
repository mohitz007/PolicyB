import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, UNCOMPLETE_TODO } from "./constants"


export const add_todo = (item) => (
    {
        type: ADD_TODO,
        payload: item
    }
)

export const delete_todo = (currTime) => (
    {
        type: DELETE_TODO,
        payload: currTime
    }
)

export const complete_todo = (currTime) => (
    {
        type: COMPLETE_TODO,
        payload: currTime
    }
)

export const uncomplete_todo = (currTime) => (
    {
        type: UNCOMPLETE_TODO,
        payload: currTime
    }
)