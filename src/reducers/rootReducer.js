import {cityReducer} from "./cityReducer.js";
import {weatherReducer} from "./weatherReducer.js";
import {messageReducer} from "./messageReducer.js";

export const rootReducer = (state, action) => {
    return {
        city: cityReducer(state.city, action),
        timestamp: cityReducer(state.timestamp, action),
        weather: weatherReducer(state.weather, action),
        message: messageReducer(state.message, action)
    }
}
