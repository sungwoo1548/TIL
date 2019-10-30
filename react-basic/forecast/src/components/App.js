import React, { useState, useEffect } from 'react';

import Current from './Current';
import Forecast from './Forecast';

const App = () => {

    return (
        <>
            <header>
                <h1>일기 예보</h1>
            </header>
            <main>
                <Current />
                <Forecast />
            </main>
        </>
    )
}

export default App
