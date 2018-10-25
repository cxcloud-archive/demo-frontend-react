import React, { Component } from 'react'
import CategoriesList from './CategoriesList'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/fontawesome-free-solid'

export default ({
  id,
  name,
  image,
  priceInEuro,
  currency,
  sku,
  color,
  size
}) => {

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 20px 40px 20px 40px;
  text-transform: capitalize;
  color: darkslategrey;
`;
const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 580px) {
    display: flex;
    flex-direction: column;
  }
`
const ProductImg = styled.div`
  text-align: center;
  max-width: 30em;
`;
const ProductInfo = styled.div`
  max-width: 50em;
  @media only screen and (max-width: 1100px) {
    padding: 0 40px 0 40px;
    line-height: 26px;
  }
  h1 {
    font-weight: bold;
    font-size: 28px;
    color: #d3b756;
  }
`;
const Rating = styled.div`
  display: inline-flex;
  align-items: center;
  p {
    margin-left: 15px;
    a {
      color: #000000;
      :visited {
        color: #000000;
      }
    }
  }
`;
const Cart = styled.div`
  button {
    padding: 15px 20px 15px 20px;
    border-radius: 2px;
    border-color: #f1ca5a;
    background-color: #fff;
    color: #d3b756
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    & :hover {
      border-color: #d3b756;
      background-color: #d3b756;
      color: whitesmoke;
    }
  }
`;
console.log('hello ' + size)
  return(
    <Wrapper>
      <ProductContainer>
        <ProductImg>
          <img height="640" width="480" src={image} alt="blank" />
        </ProductImg>
        <ProductInfo>
          <div>
            <h1>{name}</h1>
            <p>{sku}</p>
          </div>
          <Rating>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <p>
              <a href="">Write first review</a>
            </p>
          </Rating>
          <p>Color: {color}</p>
          <p>Size: {size}</p>
          <p>€ {priceInEuro}</p>
          <Cart>
            <button>Add to cart</button>
          </Cart>
        </ProductInfo>
      </ProductContainer>
    </Wrapper>
  );
}
