import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import "./Forecast.css";

const Forecast = ({ forecast, unit }) => {

    const getHoursName = (h) => {
        return h > 12 ? `오후 ${h - 12}시` : `오전 ${h}시`
    };

    const cut = forecast.list.slice(0, 10);
    const data = cut.map(el => {
        return {
            time: `${getHoursName(new Date(el.dt * 1000).getHours())}`,
            기온: unit === "C" ? Math.round(el.main.temp) : Math.round(el.main.temp * 9 / 5 + 32),
        }
    });

    const reponsiveWidth = () => {
        const maxWidth = 700;
        const width = window.innerWidth - 10;
        return width > maxWidth ? maxWidth : width
    };
    return (
        <div className="forecast">
            <LineChart width={reponsiveWidth()} height={200} data={data}>
                <Line type="monotone" dataKey="기온" />
                <XAxis dataKey="time" />
                <YAxis domain={["dataMin-1", "dataMax+1"]} />
                <Tooltip />
                <Legend />
            </LineChart>
        </div>
    )
}

export default Forecast
