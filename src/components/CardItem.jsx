import React from 'react';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <a className='cards__item__link' href={props.path}>
          <figure data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            
          </div>
        </a>
      </li>
    </>
  );
}

export default CardItem;