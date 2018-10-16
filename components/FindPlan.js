import React from 'react';
 
export default () => {
    return (
        <div className="FindPlan backgroundLightGrey">
            <div className="subcontainer">
                <div className="findPlan-text">
                    <h2 className="normal bold">Find the right plan for you.</h2>
                    <p>Explore Internet, TV, and phone bundlesavailable in your area. Get the 100% fiber-optic network offered to you
                    by cxcloud that no one else can match.
                </p>
                </div>
                <a href="#"><img className="arrow-icon" src="../static/images/next.png" alt="blank" /></a>
            </div>
            <style jsx>
                {`
                .FindPlan {
                    padding: 30px;
                    width: -webkit-fill-available;
                    display: inline-flex;
                    align-items: center;
                    background-color: #cecece;
                }
                .FindPlan h2 {
                    color: #ff3764;
                }
                .subcontainer {
                    max-width: 75em;
                    display: inline-flex;
                    align-items: center;
                    margin: 0 auto;
                }
                .findPlan-text {
                    grid-column: 1;
                }
                .arrow-icon {
                    grid-column: 2;
                    width: auto;
                    height: 70%;
                    margin-left: 50px;
                }
                @media only screen and (max-width : 480px) {
                    .arrow-icon {
                        margin-left: 20px;
                    }
                }
            `}
            </style>
        </div>
    );
}