import {legacy_createStore as createStore} from "redux";
import {rootReducer} from "../reducers/rootReducer.js";

const initialState = {
    city: { name: '', timestamp: 0 },
    weather: { data: Date.now(), message: 'Enter city name' },
};

export const store = createStore(rootReducer,initialState);