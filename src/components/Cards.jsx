import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/IMG_7400.JPG'
              path="http://cs.fanlink.to/clue"
            />
            <CardItem
              src='images/two.jpg'
              path='https://cs.fanlink.to/Two'
            />
          </ul>
        </div>
        <span className="block-example border-bottom border-dark"></span>
      </div>
    </div>
  );
}

export default Cards;