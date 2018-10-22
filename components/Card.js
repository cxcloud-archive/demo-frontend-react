import React from 'react'
import style from 'styled-components'

export default ({ id, name, image, description, price, currency }) => {
  return(
  <Wrapper>
  {/* use link component */}
      <a href={`/Product?id=${id}`}>
        <div>
          <div>
            <img src={image} width="80px" height="120px" alt="" />
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
    </Wrapper>
  );
};
const Wrapper = style.div`
  display: flex;
  justify-content: center;
  margin: 10px;
  padding: 10px;
  :nth-child(odd) {
    background-color: #f7f7f7;
  }
  :nth-child(even) {
    background-color: #f4f2f2;
  }
`;
