import React from 'react';

export default ({ productName }) => {
    return (
        <div className="CoverAllPages">
            <div className="cover">
                <div className="cover-container">
                    <div className="cover-text">
                        <h1 className="cover-h1">{productName}</h1>
                        <h4>The easiest way to save on your internet bill</h4>
                    </div>
                </div>
            </div>
            <style jsx>
                {` 
                .cover {
                    background-image: url('https://images.pexels.com/photos/421888/pexels-photo-421888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
                    background-repeat: no-repeat;
                    background-size: cover;
                    height: 15em;
                    border-top: 10px solid #ff3764;
                }
                .cover-container {
                    position: relative;
                    top: -1px;
                    width: 100%;
                    height: 87%;
                    background-color: rgba(63, 71, 81, 0.9);
                    text-align: center;
                    display: table;
                    margin: 0 auto;
                    color: whitesmoke;
                }
                .cover-h1 {
                    font-weight: lighter;
                    text-transform: uppercase;
                }
                .cover-text {
                    display: table-cell;
                    vertical-align: middle;
                }
                .cover-container h1, .cover-container h4 {
                    color: whitesmoke;
                }
                `}
            </style>
        </div>
    );
}