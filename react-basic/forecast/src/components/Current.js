import React from 'react';
import StateIcon from './StateIcon';

import "./Current.css";

const Current = (props) => {
    const { name, dt, weather, main, wind, rain, snow } = props.current;
    const { unit, setUnit } = props;
    const time = new Date(dt * 1000);
    const day = ["일", "월", "화", "수", "목", "금", "토"];

    const changeUnit = () => {
        setUnit(unit === "C" ? "F" : "C");
    }
    return (
        <>
            <section className="header">
                <h1 className="text-muted padding-left">{name}</h1> {/**현재 위치*/}
                <article className="contents text-muted">
                    <time>{/**관측 시각*/}
                        {`(${day[time.getDay()]}요일)`}
                        {time.toLocaleTimeString()}
                    </time>
                    <p>{weather[0].description}</p>{/**날씨 상태*/}
                </article>
            </section>
            <section className="grid-contents">
                <article className="weather">
                    <StateIcon icon={weather[0].icon} />{/**날씨 아이콘*/}
                    <p className="temperature">{unit === "C" ? Math.round(main.temp) : Math.round(main.temp * 9 / 5 + 32)}</p>{/**기온*/}
                    <section className="units">
                        <span
                            className={unit === "C" ? null : "clickable"}
                            onClick={unit === "C" ? null : changeUnit}>ºC</span>
                        <span>|</span>
                        <span
                            className={unit === "F" ? null : "clickable"}
                            onClick={unit === "F" ? null : changeUnit}>ºF</span>
                    </section>
                </article>
                <article className="additional-info">
                    <p>{rain && `강수량: ${rain["1h"]} (1h)`}</p> {/**강수량*/}
                    <p>{snow && `적설량: ${snow["1h"]} (1h)`}</p>{/**적설량*/}
                    <p>습도 : {main.humidity}(%)</p>{/**습도*/}
                    <p>풍속 : {wind.speed}(m/s)</p>{/**풍속*/}
                </article>
            </section>
        </>
    )
}

export default Current
