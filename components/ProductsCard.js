import styled from 'styled-components';
import Link from 'next/link';
import { Colors } from '../common/theme';

const Wrapper = styled.div`
  display: flex;
  flex: 1 1 12rem;
  max-width: 13em;
  padding: 1.25rem;
  margin: 0.75rem;
  box-shadow: inset 0rem 0rem 0.81rem -0.31rem ${Colors.darkSlateGray};
  border-radius: 0.2rem;
  a {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    text-transform: capitalize;
  }
  &:hover {
    background-color: ${Colors.mustard};
    transition: background-color 200ms linear;
  }
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  p {
    margin-top: 0;
    font-weight: 100;
    font-size: 0.87rem;
  }
`;
const Title = styled.h1`
  font-weight: 600;
  font-size: 1rem;
  margin-top: 1rem;

  ${Wrapper}:hover & {
    color: ${Colors.lightGray};
  }
`;
const Price = styled.span`
  padding-top: 0.62rem;
  border-top: 0.12rem solid rgba(204, 204, 204, 0.4);
  font-weight: 400;
`;

export default ({ id, name, image, description, price, currency }) => {
  const priceInEuro = (price / 100).toFixed(2);

  return (
    <Wrapper>
      <Link href={`/ProductPage?id=${id}`}>
        <a>
          <img src={image} width="100%" height="auto" alt="" />
          <Description>
            <Title>{name}</Title>
            <p>{description}</p>
          </Description>
          <Price>
            {priceInEuro} {currency}
          </Price>
        </a>
      </Link>
    </Wrapper>
  );
};
