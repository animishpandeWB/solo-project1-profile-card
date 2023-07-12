import React from 'react';
import pokemonPic from './pokemon-pic.jpg';
import './App.css';

function Info() {
    return (
        <div className='info-body'>
            <img src={pokemonPic} className='info-img'/>
            <p className='info-name'>Micheal Scott</p>
            <p className='info-position'>Branch Manager</p>
            <p className='info-email'>michealscott@dundermifflin.com</p>
            <div className='info-btn'>
                <a href='https://www.linkedin.com' className='btn'>Linkedin</a>
                <a href='https://www.gmail.com' className='btn'>Email</a>
            </div>
        </div>
    );
}

export default Info;