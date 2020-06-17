import React from 'react';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zip: '',
            city: '',
            state: '',
            temp: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ zip: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        fetch(this.getWeather(this.state.zip))
            .then(res => res.json())
            .then(({ response }) => {
                this.setState({
                    city: response.place.name,
                    state: response.place.state,
                    temp: response.ob.tempF,
                    desc: response.ob.weather
                });
            });
    }

    getWeather = (userZip) => {
        const url = 'https://api.aerisapi.com/observations/zip?client_id=bztqTzogbfkse9jYTOTi7&client_secret=25AvdRwi0aGuFcasRG1wNXIXCZCsiXuut9PqKge9';
        const newUrl = url.replace('zip', userZip);
        return newUrl;
    }

    // if(temp < 40) {
    //     // too cold
    // } else if(temp > 68) {
    //     // too hot
    // } else {
    //     // perfect
    // }

    render() {
        const { city, state, temp, desc } = this.state;

        return (
            <>
                <div className='box'>
                    <div className='tagline'>
                        <h1 className='tagline-text'>Find out if today's weather is suitable for wearing a hoodie.</h1>
                        <p className='tagline-text_subtitle'>Just plug in your zip code and we'll help you figure out if today is a hoodie day.</p>
                    </div>
                    <div className='weather-form_container'>
                        <h2 className='weather-form_title'>Let's check the weather...</h2>
                        <form className='weather-form' onSubmit={this.handleSubmit}>
                            <input value={this.state.zip} onChange={this.handleChange} placeholder='Enter your zip code' />
                            <button className='weather-form_button' type='submit'>Submit</button>
                        </form>
                        {(city && desc && temp) &&
                            <>
                                <p className='message'>It is currently {desc.toLowerCase()} in <span className='city'>{city}</span>, {state.toUpperCase()} with a temperature of {temp}&deg;F.</p>
                            </>
                        }
                    </div>
                </div>
            </>
        );
    };
};

export default Content;