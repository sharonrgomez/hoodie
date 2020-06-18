import React from 'react';
import Modal from './Modal';

export default class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zip: '',
            city: '',
            state: '',
            temp: '',
            showModal: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    hideModal = () => {
        this.setState({ showModal: false });
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
        this.setState({ showModal: true });
    }

    getWeather = (userZip) => {
        const url = 'https://api.aerisapi.com/observations/zip?client_id=bztqTzogbfkse9jYTOTi7&client_secret=25AvdRwi0aGuFcasRG1wNXIXCZCsiXuut9PqKge9';
        return url.replace('zip', userZip);
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
                <Modal show={this.state.showModal} handleClose={this.hideModal}>
                    {(city && desc && temp) &&
                        <>
                            <h1>It is currently {desc.toLowerCase()} in <span className='city'>{city}</span>, {state.toUpperCase()} with a temperature of {temp}&deg;F.</h1>
                        </>
                    }
                </Modal>
                <div className='box'>
                    <div className='tagline'>
                        <h1 className='tagline-text'>Find out if today's weather is suitable for wearing a hoodie.</h1>
                        <p className='tagline-text_subtitle'>Just plug in your zip code and we'll help you figure out if today is a hoodie day.</p>
                    </div>
                    <div className='weather-form_container'>
                        <h2 className='weather-form_title'>Let's check the weather...</h2>
                        <form className='weather-form' onSubmit={this.handleSubmit}>
                            <input value={this.state.zip} onChange={this.handleChange} placeholder='Your zip code' />
                            <button className='button' type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
            </>
        );
    };
};