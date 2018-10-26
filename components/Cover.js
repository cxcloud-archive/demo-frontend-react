import React, { Component } from 'react'
import Link from 'next/link'
import Util from '../common/Util'
import styled from 'styled-components'

export default class extends Component {

  render() {
    const Wrapper = styled.div`
  
    @media only screen and (max-width: 480px) {
      display: flex;
      flex-direction: column;
    }
    background-image: url('https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7ef79a01f0a12450049b7d20cd10f93c&auto=format&fit=crop&w=1267&q=80');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 50em;
  width: 100%;
  `
    return(<Wrapper></Wrapper>)
  }
}
