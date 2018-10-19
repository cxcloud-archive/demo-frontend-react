import React from 'react'

export default ({ id, name, image, description, price, currency }) => {
  return(
  <div className="Card">
  <a href={`/Product?id=${id}`}>
    <div>
      <div>
        <img src={image} width="80px" height="120px" alt="" />
      </div>
      <div>
        <p>{name}</p>
        <p>{description}</p>
        <p>{price} {currency}</p>
      </div>
    </div>
    </a>
    <style jsx>
      {`
        .Card {
          display: flex;
          justify-content: center;
          border: 1px solid black;
          margin: 4px;
        }
        `}
    </style>
  </div>
  );
};
