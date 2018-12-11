import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandSpock,
  faShippingFast,
  faHeart
} from '@fortawesome/fontawesome-free-solid';

const Wrapper = styled.div`
  display: flex;
  max-width: 82em;
  flex-direction: column;
  h1 {
    font-size: 1.25rem;
    text-transform: uppercase;
    text-align: center;
    margin-top: 0;
  }
`;

const FeaturesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
  grid-gap: 3rem;
  margin-top: 2rem;
`;

const Feature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.75;
  text-align: justify;
  .icon {
    margin-bottom: 1.25rem;
  }
  h2 {
    margin: 0;
    text-transform: uppercase;
    font-size: 1rem;
  }
`;

export default () => (
  <Wrapper>
    <h1>Amazing Features</h1>
    <FeaturesList>
      <Feature>
        <span className="fas fa-shipping-fast" />
        <FontAwesomeIcon
          className="icon"
          icon={faShippingFast}
          size="4x"
          color="rgba(47,79,79, 0.6)"
        />
        <h2>Free shipping</h2>
        <p>
          Get free shipping on all orders over €100! and free returns to our
          Finnish return centre! Items are dispatched from the US and will
          arrive in 5-8 days.
        </p>
      </Feature>
      <Feature>
        <FontAwesomeIcon
          className="icon"
          icon={faHandSpock}
          size="4x"
          color="rgba(47,79,79, 0.6)"
        />
        <h2>Amazing customer service</h2>
        <p>
          Get Free Shipping on all orders over €100 and and free returns to our
          Finnish return centre. Items are dispatched from the US and will
          arrive in 5-8 days.
        </p>
      </Feature>
      <Feature>
        <FontAwesomeIcon
          className="icon"
          icon={faHeart}
          size="4x"
          color="rgba(47,79,79, 0.6)"
        />
        <h2>No custom or duty fees!</h2>
        <p>
          We pay these fees so you don't have to! The total billed at checkout
          is rthe final amount you pay, inclusive of VAT, with no additional
          charges at hte time of delivery!
        </p>
      </Feature>
    </FeaturesList>
  </Wrapper>
);
