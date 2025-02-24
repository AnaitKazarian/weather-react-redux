export const SET_CITY = 'SET_CITY';

export const setCity = city => ({
    type: SET_CITY,
    payload: {
        city,
        timestamp: Date.now(),
    }
})