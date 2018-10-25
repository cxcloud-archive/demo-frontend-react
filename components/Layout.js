import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components'

export default ({children}) => {
  const global = styled.div`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #4a4a4a;`;
  const button = styled.button`
    background-color: #f1ca5a;
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

    const Wrapper = styled.div`
      color: darkslategrey;
    `;

  return(
    <div>
        <Wrapper>
            <Header global />
            <main className="main">{children}</main>
            <Footer />
        </Wrapper>
    </div>
);
}
