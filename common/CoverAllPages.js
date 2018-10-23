import React from 'react';
import styled from 'styled-components'

export default ({ productName }) => {
  const Wrapper = styled.div`
    margin-bottom: 50px;
    `
  const Cover = styled.div`
    background-image: url('https://images.pexels.com/photos/421888/pexels-photo-421888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
    background-repeat: no-repeat;
    background-size: cover;
    height: 15em;
    border-top: 10px solid #ff3764;
    div {
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
  `
  return (
    <Wrapper>
      <Cover>
        <div></div>
      </Cover>
    </Wrapper>
  );
}
