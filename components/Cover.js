import React from 'react';
 
export default ({user}) => {
    return (
        <div className="Cover container cover">
            <div className="cover-container">
                <div className="cover-text">
                    <h1 className="cover-h1">Hello,</h1>
                    <h1 className="cover-h1">{user.firstName} {user.lastName}</h1>
                    <h4>Wonderful to have you here</h4>
                </div>
            </div>
            <style jsx>
                {`
                .Cover {
                    background-image: url('http://stowawaymag.com/files/2017/12/usa-1778524-1080x675.jpg');
                    background-repeat: no-repeat;
                    //background-position-y: -214px;
                    background-size: cover;
                    height: 24em;
                    width: 100%;
                    display: inline-grid;
                    border-top: 10px solid #ff3764;
                }
                .cover {
                    grid-area: cover;
                }
                .cover-container {
                    position: relative;
                    width: 100%;
                    height: 70%;
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
                /* media queries */
                @media only screen and (max-width: 480px) {
                    .cover-container {
                        top: 0;
                    }
                } 
            `}
            </style>
        </div>
    );
}
