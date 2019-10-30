import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Spinner from './Spinner';
import SeasonDisplay from './SeasonDisplay';
import Error from './Error';


class App extends Component {

    state = {
        latitude: null, // 위도
        longitude: null, // 경도
        errorMessage: "",
    }

    renderContnet() {
        const { latitude, errorMessage } = this.state;
        // 사용자가 위치 허용
        if (latitude && !errorMessage) {
            return <SeasonDisplay latitude={latitude} />;
        }

        // 사용자가 위치 거부
        if (errorMessage && !latitude) {
            return <Error />;
        }

        // 사용자의 결정을 기다리는 중....
        return <Spinner message="Where are you?" />;
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                this.setState({ latitude: position.coords.latitude });
            },
            (error) => {
                console.log(error);
                this.setState({ errorMessage: error.message });
            }
        );
    }

    render() {
        return (
            <>
                {this.renderContnet()}
            </>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
