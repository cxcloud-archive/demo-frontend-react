import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/fontawesome-free-solid';
import { Colors, Device } from '../common/theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  .price {
    font-weight: bold;
  }
  img {
    max-height: 30rem;
  }
  @media ${Device.mobile} {
    flex-direction: column;
    img {
      max-height: 20rem;
    }
  }
`;
const ProductInfo = styled.div`
  max-width: 50em;
  @media ${Device.tablet} {
    margin-left: 2.5rem;
    line-height: 1.62;
  }
  h1 {
    font-size: 1.75rem;
    color: ${Colors.darkSlateGray};
  }
`;
const Rating = styled.p`
  display: flex;
  align-items: center;
  a {
    margin-left: 0.93rem;
    color: ${Colors.lightgray};
    :visited {
      color: ${Colors.white};
    }
  }
`;
const CartButton = styled.button`
  cursor: pointer;
  padding: 0.5em 1em;
  background-color: ${Colors.mustard};
  color: white;
  font-size: 0.9rem;
  text-transform: capitalize;
  &:hover {
    border-color: transparent;
    box-shadow: inset 0rem 0rem 0.5rem -0.18rem ${Colors.darkSlateGray};
  }
`;

export default ({ name, image, priceInEuro, sku, color, size }) => (
  <Wrapper>
    <img src={image} alt="blank" />
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
        <a href="">Write first review</a>
      </Rating>
      <p>Color: {color}</p>
      <p>Size: {size}</p>
      <p className="price">€ {priceInEuro}</p>
      <CartButton>Add to cart</CartButton>
    </ProductInfo>
  </Wrapper>
);
