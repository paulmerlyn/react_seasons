import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import Loading from './Loading';


class App extends React.Component {
    state = { 
        lat: null, 
        loadingGeoLocation: true, 
        season: null,
        loadingMessage: 'Waiting ...'
     };

    successCallback = (position) => {
        let msg = `Your latitude is ${position.coords.latitude}`;
        msg += `\r\nAnd your longitude is ${position.coords.longitude}`;
        console.log(msg);
        this.setState({lat: position.coords.latitude, long: position.coords.longitude, errorMessage: '', loadingGeoLocation: false});
        const month = new Date().getMonth() + 1;
        this.setSeason(month, position.coords.latitude);
    }

    errorCallback = (err) => {
        console.log(`Sorry. We cannot detect your location using the browser-based geolocation object`);
        console.log(err);
        this.setState({ errorMessage: 'Sorry, it looks like geolocation isn\'t available for you: ' + err.message, loadingGeoLocation: false});
    }
    
    setSeason = (month, lat) => {
        const hemisphere = (lat >= 0 ? 'northern' : 'southern');
        switch (hemisphere) {
            case 'northern' :
                if (month >= 4 && month <= 9) {
                    this.setState({ season: 'summer'});
                } else {
                    this.setState({ season: 'winter'});
                }
                break;                
            case 'southern' :
                if (month >= 4 && month <= 9) {
                    this.setState({ season: 'winter'});
                } else {
                    this.setState({ season: 'summer'});
                }
                break;
            default :
                console.log(`Error: hemisphere is indeterminate: ${hemisphere}`)               
        }
    }

    constructor(props) {
        super(props);
    }

    renderContent() {
        if (this.state.loadingGeoLocation) {
            return <Loading loadingMessage={this.state.loadingMessage} />;
        } else {
            if (!this.state.errorMessage) {
                return <SeasonDisplay season={this.state.season ? this.state.season : 'winter' } />;
            } else {
                return <div className="season-display">{this.state.errorMessage}</div>;
            }
        }
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(this.successCallback, this.errorCallback);
        console.log('The App component did mount');
    }

    componentDidUpdate() {
        console.log('The App component did update');
        console.log(this.state);
    }
}

export default App;