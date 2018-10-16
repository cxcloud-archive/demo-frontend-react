import React, { Component } from 'react';

export default ({
    productId,
    productName,
    productCode,
    productHighlight,
    price,
    longDescription,
    productShortDescription,
    availability,
    image
}) => {
    return <div className="ServiceInformation grid-container">
        <div className="container">
          <div className="solarHouse-container">
            <img className="solarHouse-icon" src={image} alt="blank" />
          </div>
          <div className="container-text">
            <div>
              <h2>
                {productName} {productCode}
              </h2>
              <p>EAN Code</p>
              <div>
                <p>Stars Rating icon</p>
                <a><p>Write first review</p></a>
              </div>
              <p>{productShortDescription}</p>
              <p>
                <span>$ {price} / mo</span>
                maintenance fee
              </p>
              <h3>{productHighlight}</h3>
              <p className="mainContent">{longDescription}</p>
            </div>
            <div>
              <h2 className="bold">How to get started?</h2>
              <p>Just book a time for our engineer to visit your home.</p>
              <p>The next free slots in the area of Espoo are:</p>
              <ul className="availability-list">
                {availability ? availability.map((item, i) => <li key={i}>
                      <div className="time-details">
                        <img id="clockIcon" src="https://png.icons8.com/metro/1600/clock.png" alt="clock" />
                        <p>{item}</p>
                      </div>
                      <p className="reserve-btn">
                        <a href="">Reserve</a>
                      </p>
                    </li>) : <div>No time available</div>}
              </ul>
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
            }
            .mainContent {
              line-height: 30px;
            }
            .solarHouse-icon {
              height: auto;
              width: 70%;
            }
            .solarHouse-container {
              max-width: 16em;
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
