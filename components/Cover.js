import React from 'react'
import styled from 'styled-components'
export default ({user}) => {
  return (
    <Wrapper>
      <div></div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-image: url('http://stowawaymag.com/files/2017/12/usa-1778524-1080x675.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 24em;
  width: 100%;
  display: inline-grid;
  border-top: 10px solid #ff3764;
  grid-area: cover;
  div {
    position: relative;
    width: 100%;
    height: 70%;
    background-color: rgba(63, 71, 81, 0.9);
  }
`
