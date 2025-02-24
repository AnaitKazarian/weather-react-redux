import {SET_CITY} from "../actions/cityAction.js";

const defaultState = {
    city: { name: 'Ashdod', timestamp: 0 }
};

export const cityReducer = (state= defaultState, action) => {
    switch(action.type) {
        case SET_CITY:
            return {...state, city: action.payload.city, timestamp: action.payload.timestamp};
        default:
            return state;
    }
}