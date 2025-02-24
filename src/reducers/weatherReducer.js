import {SET_WEATHER} from "../actions/weatherAction.js";


export const weatherReducer = (state={},action) => {
    switch(action.type) {
        case SET_WEATHER:
            return action.payload;
        default:
            return state;
    }
}