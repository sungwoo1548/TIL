import React, { useState, useEffect } from 'react';
import axios from 'axios';

import "./App.css";

import Current from './Current';
import Forecast from './Forecast';
import Spinner from './Spinner';

const App = () => {
    const APPID = "06e171cdf39742a2f89a40c9b002ed9d";

    const [current, setcurrent] = useState(null);
    const [forcast, setforcast] = useState(null);

    const getLocation = () => {
        return new Promise((resolve, reject) => {
            window.navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    };

    const getTemp = async (coords) => {
        const { latitude: lat, longitude: lon } = coords;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${APPID}`;
        const res = await axios.get(url);
        console.log(res);
        const { data } = res;
        setcurrent(data);
    }
    const getHoulyTemp = async (coords) => {

    }

    const getAll = async () => {
        try {
            const { coords } = await getLocation();
            await getTemp(coords);
            await getHoulyTemp(coords);
        } catch (error) {
            console.error(error);
            alert("위치를 동의해주시기 바랍니다.");
        }
    }

    useEffect(() => { console.log("hi"); getAll(); }, []); // 2번째 인자, 빈 배열이면 componentDidmount 를 의미

    return (
        <>
            <header className="header-padding">
                <h1>일기 예보</h1>
            </header>
            <main className="container">
                {!current ? <Spinner /> : <Current current={current} />}
                <Forecast />
            </main>
        </>
    )
}

export default App
