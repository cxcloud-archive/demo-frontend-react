import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

export default ({ id, name, image, description, price, currency }) => {
  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px;
    padding: 10px;
    a {
      text-decoration: none;
      color: #000000;
      font-weight: 500;
    }
    a:hover {
      color: #3a4048;
    }
    a:visited {
      color: #000000;
    }
    :nth-child(odd) {
      background-color: #f7f7f7;
    }
    :nth-child(even) {
      background-color: #f4f2f2;
    }`;
    
  return(
    <Wrapper>
      <Link href={`/Product?id=${id}`}>
        <a>
          <div>
            <div>
              <img src={image} width="80" height="120" alt="" />
            </div>
            <div>
              <p>{name}</p>
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
