import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components'

export default ({children}) => {
  const global = styled.div`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #4a4a4a;`;
  const button = styled.button`
    background-color: #ff3764;
    padding: 8px 30px 8px 30px;
    color: white;
    font-weight: 400;
    font-size: 18px;
    border-radius: 8px;
    margin-top: 20px;
    border-color: transparent;
    a {
      color: white;
      text-decoration: none;
    }`

    const title = styled.h1`
      font-size: 24px;
      @media only screen and (max-width : 400px) {
      font-size: 20px;
      color: #4a4a4a;
      }
    `;
      const big = styled.h1`
        font-size: 20px;
      `;
      const medium = styled.p`
        font-size: 16px;
      `;
      const small = styled.p`
        font-size: 12px;
      `;

      const light = styled.p`
        font-weight: 200;
      `
      const bold = styled.p`
        font-weight: 600;
      `


  return(
    <div>
        <div>
            <Header global />
            <main className="main">{children}</main>
            <Footer />
        </div>
        <style>
        {`

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
          /* Media queries */
          @media only screen and (max-width : 400px) {
            .FindPlan {
            padding: 0px 20px 0px 20px;
            }
            .title {

            }
          }
        `}
        </style>
    </div>
);
}
