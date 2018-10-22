import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default ({children}) => (
    <div>
        <div>
            <Header />
            <main className="main">{children}</main>
            <Footer />
        </div>
        <style>
        {`
          * {
              font-family: Verdana, Geneva, Tahoma, sans-serif;
              color: #4a4a4a;
          }
          .CategoriesList, .RecommendedServices, .FindPlan, .ProductDetails, .Calendar {
              padding: 20px 40px 20px 40px;
          }
          .CategoriesList, .RecommendedServices, .ProductDetails {
              max-width: 75em;
          }
          .recommServ-title, .currServ-title {
              padding: 0 30px 0 30px;
          }
          .title {
              font-size: 24px;
          }
          .big {
              font-size: 20px;
          }
          .medium {
              font-size: 16px;
          }
          .small {
              font-size: 12px;
          }
          .light {
              font-weight: 200;
          }
          .bold {
              font-weight: 600;
          }
          .backgroundLightGrey {
              background-color: lightgrey;
          }
          .backgroundGrey {
              background-color: grey;
          }
          .backgroundDarkGrey {
              background-color: darkgrey;
          }
          .readMore {
            background-color: #ff3764;
            padding: 8px 30px 8px 30px;
            color: white;
            font-weight: 400;
            font-size: 18px;
            border-radius: 8px;
            margin-top: 20px;
            border-color: transparent;
          }
          .readMore a {
            color: white;
            text-decoration: none;
          }
          /* Media queries */
          @media only screen and (max-width : 400px) {
            .CategoriesList, .RecommendedServices, .FindPlan {
            padding: 0px 20px 0px 20px;
            }
            .title {
            font-size: 20px;
            color: #4a4a4a;
            }
          }
        `}
        </style>
    </div>
);
