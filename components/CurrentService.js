import React, { Component } from 'react'
import Link from 'next/link'
import Util from '../common/Util'

export default ({

}) => {
    return (
        <div className="CurrentService">
            <div className="container">
                <div className="subContainer">
                    <img className="home-icon" src={image} alt="blank"></img>
                </div>
                <div className="details">
                <div>
                    <h2 className="medium bold">{productName}</h2>
                    <p>100 Mbps</p>
                    <p className="medium bold">${price}/mo</p>
                    <p>{productShortDescription}</p>
                </div>
                <div>
                    <p>
                        <a href={'/Product?id=' + productId}>Manage subscription</a>
                    </p>
                </div>
                </div>
            </div>
            <style jsx>
                {`
                .CurrentService {
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    background: #f7f7f7;
                    padding: 10px;
                }
                .CurrentService:nth-child(odd) {
                    background-color: #f4f2f2;
                }
                .container {
                    align-items: flex-end;
                    display: inline-flex;
                }
                .home-icon {
                    width: 100px;
                    height: 100px;
                    margin-bottom: 16px;
                    margin-left: 30px;
                }
                .details {
                    margin-left: 25px;
                }
                @media only screen and (max-width: 880px) {
                    .CurrentService {
                        max-width: 28em;
                        max-height: 28em;
                    }
                }
                @media only screen and (max-width: 480px) {
                    .container {
                        display: block;
                    }
                }
            `}
            </style>
        </div>
    );
}
