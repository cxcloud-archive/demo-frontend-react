import React, { Component } from 'react'
import Link from 'next/link'
import Util from '../common/Util'
import styled from 'styled-components'

export default ({ id, name }) => {


  const Wrapper = styled.div`
    color: darkslategrey;
    div {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    }
  `;
    return (
      <Wrapper>
        <Link href={`/Category?id=${id}`}>
          <a>
            <div>
              {name}
            </div>

          </a>
        </Link>

      </Wrapper>
    );
  }
