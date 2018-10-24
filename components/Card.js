import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

export default ({ id, name, image, description, price, currency, title }) => {
  const Wrapper = styled.div`
    display: flex;
    justify-content: left;
    margin: 20px 0px 20px 0px;
    padding: 30px 20px 10px 30px;
    max-width: 16em;
    margin: 20px;
    width: 100%;
    box-shadow: 5px 7px rgba(74, 74, 74, 0.6);
    a {
      text-decoration: none;
      color: #4a4a4a;
      font-size: 14px;
      font-weight: 500;
      text-transform: capitalize;
    }
    a:hover {
      color: #3a4048;
    }
    a:visited {
      color: #4a4a4a;
    }
    :nth-child(odd) {
      background-color: #f7f7f7;
      border-color: transparent;
    }
    :nth-child(even) {
      background-color: #f4f2f2;
      border-color: transparent;
    }`;
  const Title = styled.h1`
    font-weight: bold;
    font-size: 20px;
  `

  return(
    <Wrapper>
      <Link href={`/Product?id=${id}`}>
        <a>
          <div>
            <div>
              <img src={image} width="80" height="120" alt="" />
            </div>
            <div>
              <Title>{name}</Title>
              <p>{description}</p>
              <p>
                {price} {currency}
              </p>
            </div>
          </div>
        </a>
      </Link>
    </Wrapper>
  );
};
