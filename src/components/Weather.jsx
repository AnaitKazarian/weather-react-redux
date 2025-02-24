import {api_key, base_url, weather_cache_time} from "../utils/constants.js";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setMessage, setWeather} from "../actions/weatherAction.js";

const Weather = () => {
    const city = useSelector((state) => state.city.city);
    const weather = useSelector((state) => state.weather);
    const timeStamp = useSelector((state) => state.city.timeStamp);
    const message = useSelector((state) => state.message);
    const dispatch = useDispatch();

    const getWeather = async () => {
        if (!city) return;

        try {
            const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
            if (!response.ok) {
                throw new Error('Enter correct city name');
            }
            const data = await response.json();
            dispatch(setWeather({
                city: data.name,
                country: data.sys.country,
                temp: data.main.temp,
                pressure: data.main.pressure,
                sunset: data.sys.sunset * 1000,
                cityName: city,
                timeStamp: Date.now()
            }))
            dispatch(setMessage(''));
        } catch (e) {
            dispatch(setMessage(e.message));
        }
    }

    useEffect(() => {
        if (city && (city !== weather.cityName || (timeStamp - weather.timeStamp) >= weather_cache_time)) {
            getWeather();
        }
    });

    return (
        <div className={'infoWeath'}>
            {!message &&
                <>
                    <p>Location: {weather.country}, {weather.city}</p>
                    <p>Temp: {weather.temp}</p>
                    <p>Pressure: {weather.pressure}</p>
                    <p>Sunset: {new Date(weather.sunset).toLocaleTimeString()}</p>
                </>
            }
            {message}
        </div>
    );


};

export default Weather;