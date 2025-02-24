import {SET_MESSAGE} from "../actions/weatherAction.js";

const defaultState = 'Enter city name'

export const messageReducer = (state=defaultState,action) => {
    switch(action.type) {
        case SET_MESSAGE:
            return action.payload;
        default:
            return state;
    }
}