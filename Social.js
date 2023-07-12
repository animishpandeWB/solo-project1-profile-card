import React from 'react';
import './App.css';
import insta from './images/instagram.png';
import github from './images/github.png';
import twitter from './images/twitter-sign.png';
import linkedin from './images/linkedin.png';

function Social() {
    return (
        <div className='social-body'>
            <img src={insta} className='social-img'/>
            <img src={github} className='social-img'/>
            <img src={twitter} className='social-img'/>
            <img src={linkedin} className='social-img'/>
        </div>
    );
}

export default Social;