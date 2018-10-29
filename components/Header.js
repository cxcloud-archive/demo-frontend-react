import React, { Component } from 'react'
import Link from 'next/link'
import Util from '../common/Util'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faHandSpock, faShippingFast, faHeart, faAngleDown } from '@fortawesome/fontawesome-free-solid'

export default class extends Component {
  render() {

  const Wrapper = styled.div`

    top: 2em;
    right:20em;
    position: absolute;
    display: flex;
    flex-direction: row;
    list-style: none;
    ul {
      display: flex;
      li {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 18px;
      font-weight: 500;
      margin: auto 20px auto 20px;
      a {
        display: flex;
        flex-direction: row;
        align-items: center;
        text-decoration: none;
        color: darkslategrey;
      }
      p {
        margin-right: 10px;
      }
    }
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

  return(
    <Wrapper>
      <ul>
        <li>
          <Link href={{ pathname: '/' }}>
            <a><p>Home</p><FontAwesomeIcon icon={faAngleDown} /></a>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: '/CategoryPage' }}>
            <a><p>Categories</p><FontAwesomeIcon icon={faAngleDown} /></a>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: '/About' }}>
            <a><p>About</p><FontAwesomeIcon icon={faAngleDown} /></a>
          </Link>
        </li>
      </ul>
    </Wrapper>
    );
  }
}

