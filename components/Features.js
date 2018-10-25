import React, { Component } from 'react';
import styled from 'styled-components'

export default class extends Component {
  render() {
    const Wrapper = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: justify;
      h1 {
        text-align: center;
        font-weight: 500;
        text-transform: uppercase;
      }
    `
    return(
      <Wrapper>
        <h1>Amazing Features</h1>
        <div>
          <Feature />
          <Feature />
          <Feature />
        </div>
      </Wrapper>
    )
  }
}
