import React from 'react'
import styled from 'styled-components'

export default () => {
const Wrapper = styled.div`
  background-image: url('https://images.unsplash.com/photo-1481437156560-3205f6a55735?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3237a0f8fe29f2eab42aacda40b01069&auto=format&fit=crop&w=1371&q=80');
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: -34em;
  height: 34em;
  width: 100%;
  display: inline-grid;
  border-top: 10px solid rgba(241, 202, 90, 1);
  grid-area: cover;
  div {
    position: relative;
    width: 100%;
    height: 80%;
    background-color: rgba(241, 202, 90, 0.4);
  }
`;
  return (
    <Wrapper>
      <div></div>
    </Wrapper>
  );
}
