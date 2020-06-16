import React from 'react';

const Content = () => (
    <div className='box'>
        <div>
            <h1 className='tagline-text'>Find out if the weather's suitable for wearing a hoodie today.</h1>
        </div>
        <div>
            <div className='weather-form'>
                <h2 className='weather-form_title'>Let's check the weather...</h2>
                <form>
                    <input type='text' id='zip' placeholder='Your zip code' />
                    <button type='submit'>Go</button>
                </form>
            </div>
        </div>
    </div>
);

export default Content;