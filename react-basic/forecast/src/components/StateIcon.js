import React from 'react'

const StateIcon = ({icon}) => {
    return (
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="wheater" />
    )
}

export default StateIcon
