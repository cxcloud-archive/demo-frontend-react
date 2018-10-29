import React from 'react';
import styled from 'styled-components'

export default ({ productName }) => {
  const Wrapper = styled.div`
    margin-bottom: 50px;
    `
  const Cover = styled.div`
    background-image: url("https://www.zastavki.com/pictures/originals/2013/Girls___Beautyful_Girls___Girl_on_white_background_041541_.jpg");background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 4em;
    height: 26em;
    div {
      display: flex;
      flex-direction: column;
      position: relative;
      top: 240px;
    left: 440px;

      h1 {
        margin: 0;
        font-size: 50px;
        text-transform: uppercase;
      }
    `;
  return (
    <Wrapper>
      <Cover>
        <div>
        <h1>CX-Coud E-shop</h1>
        </div>
      </Cover>
    </Wrapper>
  );
}
