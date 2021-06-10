import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src='/images/2-18.jpg' alt="Waterfall pic" />
      <h1>JULE STONE</h1>
      <p>Listen Below</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Clue <i className='far fa-play-circle' />

        </Button>
      </div>
    </div>
  );
}

export default HeroSection;


/*
<Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
*/