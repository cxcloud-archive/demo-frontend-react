import React from 'react'
import styled from 'styled-components'

export default class extends React.Component {

  render() {
    const Wrapper = styled.div`
    margin-top: 40px;
    background-image: url(https://images.unsplash.com/photo-1511184150666-9bb7d41a88f4?ixlib=rb-0.3.5…EyMDd9&s=be5c750…&auto=format&fit=crop&w=1350&q=80);
    height: 20em;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      font-size: 22px;
      padding: 20px;
  }
    `
    return(
      <Wrapper>
        <button>Join CX-Cloud</button>
      </Wrapper>
    )
  }
}
