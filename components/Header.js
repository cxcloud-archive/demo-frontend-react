import React, { Component } from 'react'
import Link from 'next/link'
import Util from '../common/Util'
import styled from 'styled-components'

export default class extends Component {
  render() {
  const Wrapper = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    @media only screen and (max-width: 480px) {
      display: flex;
      flex-direction: column;
    }
  `
  const Logo = styled.div`
    flex: auto 1 1;
    justify-content: flex-start;
    display: flex;
    margin: auto 10px auto 10px;
    img {
      height: auto;
      margin-left: 30px;
      @media only screen and (max-width: 480px) {
        margin-left: 0;
      }
    }
  `
const Title = styled.div`
  p {
    color: #939393;
    font-weight: 200;
  }
  span {
    color: #f1ca5a;
  }
`

    return(
    <Wrapper className={this.props.global}>
        <Logo className="logo">
          <Link href="/">
            <a>
              <img width="170px" height="auto" src="/static/images/cxcloud_operator_logo.jpg" alt="blank" />
            </a>
          </Link>
        </Logo>
        <Title className="title">
          <p>
            The best <span>imaginery</span> operator in the world.
          </p>
        </Title>
      </Wrapper>
      );
  }
}
