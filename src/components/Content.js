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
            error: null,
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
            .then(
                ({ response, error }) => {
                    if (error) {
                        this.setState({
                            showModal: true,
                            error: error.description
                        });
                    } else {
                        this.setState({
                            error: null,
                            showModal: true,
                            city: response.place.name,
                            state: response.place.state,
                            temp: response.ob.tempF,
                            desc: response.ob.weather,
                        })
                    }
                }
            );
    }

    getWeather = (userZip) => {
        const url = 'https://api.aerisapi.com/observations/zip?client_id=bztqTzogbfkse9jYTOTi7&client_secret=25AvdRwi0aGuFcasRG1wNXIXCZCsiXuut9PqKge9';
        return url.replace('zip', userZip);
    }

    hoodieMessage = (temp) => {
        let forecast = '';
        (parseInt(temp, 10) < 45)
            ? (forecast = 'It\'s too cold to just wear a hoodie. Maybe you should put on a coat...')
            : (parseInt(temp, 10) > 68)
            ? (forecast = 'Unfortunately, it\'s too hot to wear a hoodie today.')
            : (forecast = 'Go grab your favorite hoodie, because today is the perfect day to wear one!')
        return forecast;
    }

    render() {
        const { city, state, temp, desc, error, showModal } = this.state;
        return (
            <>
                <Modal show={this.state.showModal} handleClose={this.hideModal}>
                    {
                        showModal && (
                            error
                                ? (
                                    <p className='modal_hoodie-msg'>{error}</p>
                                )
                                : (
                                    <>
                                        <p className='modal_hoodie-msg'>{this.hoodieMessage(temp)}</p>
                                        <p className='modal_forecast'>
                                            It's currently {desc.toLowerCase()} with a temperature of {temp}&deg;F
                                            in <span className='city'>{city}</span>, {state.toUpperCase()}.
                                        </p>
                                    </>
                                )
                        )
                    }
                </Modal>
                <div className='box'>
                    <div className='tagline'>
                        <h1 className='tagline-text'>Find out if the weather is suitable for wearing a hoodie today.</h1>
                        <p className='tagline-text_subtitle'>Just plug in your zip code and we'll tell you if today is a hoodie day.</p>
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