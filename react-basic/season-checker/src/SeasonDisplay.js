import React from 'react';
import "./SeasonDisplay.css";

const getSeason = (month, latitude) => {
    if (month > 3 && month < 10) {
        return latitude > 0 ? "summer" : "winter";
    } else {
        return latitude > 0 ? "winter" : "summer";
    }
}

const seasonConfig = {
    summer: {
        text: "땀이 뻘뻘뻘...",
        iconName: "sun",
    },
    winter: {
        text: "몸이 덜덜덜....",
        iconName: "snowflake",
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(new Date().getMonth() + 1, props.latitude);
    // const season = getSeason(6, props.latitude);
    const { text, iconName } = seasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon ${iconName} massive`} />
            <h1>{text}</h1>
            <i className={`icon ${iconName} massive`} />
        </div>
    )
}

export default SeasonDisplay;
