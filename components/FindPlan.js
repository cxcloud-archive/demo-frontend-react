import React from 'react';

export default () => {
    return <div className="FindPlan backgroundLightGrey">
        <div className="subcontainer">
          <div className="findPlan-text">
            <h2 className="normal bold">
              Discover <span>CX-CLOUD</span>
            </h2>
            <p>
              Welcome to CX Cloud. This site will help you through the
              journey of setting up and operating a CX Cloud project. CX
              Cloud is an idea for creating micro-services based
              architecture on AWS Cloud. This project is created and
              maintained by Tieto's CEM unit in Finland.
            </p>
          </div>
          <a href="#">
            <img className="arrow-icon" src="../static/images/next.png" alt="blank" />
          </a>
        </div>
        <style jsx>
          {`
            .FindPlan {
              padding: 30px;
              width: -webkit-fill-available;
              display: inline-flex;
              align-items: center;
              background-color: #cecece;
              padding: 20px 40px 20px 40px;
              // @media only screen and (max-width: 400px) {
              //   padding: 0px 20px 0px 20px;
              // }
            }
            .FindPlan h2 {
              color: #ff3764;
            }
            .FindPlan span {
              font-style: italic;
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
            @media only screen and (max-width: 480px) {.arrow-icon {
                margin-left: 20px;
              }}`}
        </style>
      </div>;
}
