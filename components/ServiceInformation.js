import React, { Component } from 'react';
import Categories from './Categories'
var FontAwesome = require('react-fontawesome');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faCart, faStar, faCoffee } from '@fortawesome/fontawesome-free-solid'

export default ({
  id,
  name,
  image,
  description,
  priceInEuro,
  currency,
  sku,
  color,
  size
}) => {
  console.log(name)

    return <div className="ServiceInformation grid-container">
        <div className="container">
          <div className="solarHouse-container">
            <img className="solarHouse-icon" src={image} alt="blank" />
          </div>
          <div className="container-text">
            <div>
              <div className="title">
                <h2>{name}</h2>
                <p>{sku}</p>
              </div>
              <div className="rating">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <p>
                  <a href="">Write first review</a>
                </p>
              </div>

              <p>{description}</p>
              <p>Color: {color}</p>
              <p>Size: {size}</p>
              <p>€ {priceInEuro}</p>
              <div className="cart">
              <button>Add to cart</button>
              </div>
            </div>
            <div>
              <h2 className="bold">How to get started?</h2>
              <p>Just book a time for our engineer to visit your home.</p>
              <p>The next free slots in the area of Espoo are:</p>
              {/* <ul className="availability-list">
                {availability ? availability.map((item, i) => <li key={i}>
                      <div className="time-details">
                        <img id="clockIcon" src="https://png.icons8.com/metro/1600/clock.png" alt="clock" />
                        <p>{item}</p>
                      </div>
                      <p className="reserve-btn">
                        <a href="">Reserve</a>
                      </p>
                    </li>) : <div>No time available</div>}
              </ul> */}
            </div>
          </div>
        </div>
        <style jsx global>
          {`
            .ServiceInformation {
              margin: 0 auto;
              display: flex;
              justify-content: center;
            }
            .container {
              margin: 0 auto;
              display: inline-flex;
            }
            .container-text {
              max-width: 50em;
              margin-top: 100px;
            }
            .mainContent {
              line-height: 30px;
            }
            .solarHouse-icon {
              height: auto;
              width: 70%;
            }
            .solarHouse-container {
              text-align: center;
            }
            .availability-list {
              display: flex;
              flex-direction: column;
              padding: 0;
            }
            .availability-list li {
              display: inline-flex;
              align-items: center;
            }
            .time-details {
              display: inline-flex;
              align-items: center;
            }
            .time-details p {
              margin-left: 10px;
            }
            .reserve-btn {
              margin-left: 10px;
            }
            #clockIcon {
              width: 16px;
              height: 16px;
            }
            @media only screen and (max-width: 1100px) {.container-text {
                padding: 0 40px 0 40px;
                line-height: 26px;
              }}
            @media only screen and (max-width: 580px) {.container {
                display: flex;
                flex-direction: column;
              }
              .availability-list li {
                display: flex;
                flex-direction: column;
              }
              .reserve-btn {
                margin-top: -10px;
              }}`}
        </style>
      </div>;
}
