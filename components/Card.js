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
    min-height: 24em;
    margin: 20px;
    width: 100%;
    box-shadow: 2px 2px rgba(211, 183, 86, 0.6);
    border: 1px solid #d3b756;
    border-radius: 3px;
    a {
      text-decoration: none;
      color: darkslategrey;
      font-size: 14px;
      font-weight: 500;
      text-transform: capitalize;
    }
    a:hover {
      color: #3a4048;
    }
    a:visited {
      color: darkslategrey;
    }`;
  const Title = styled.h1`
    font-weight: bold;
    font-size: 20px;
  `
  const priceInEuro = (price / 100).toFixed(2);

  return <Wrapper>
      <Link href={`/Product?id=${id}`}>
        <a>
          <div>
            <div>
              <img src={image} width="180" height="240" alt="" />
            </div>
            <div>
              <Title>{name}</Title>
              <p>{description}</p>
              <p>
                {priceInEuro} {currency}
              </p>
            </div>
          </div>
        </a>
      </Link>
    </Wrapper>;
};
