import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandSpock,
  faShippingFast,
  faHeart
} from '@fortawesome/fontawesome-free-solid';
import { Colors } from '../common/theme';

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

const features = [
  {
    icon: faShippingFast,
    title: 'Free Shipping',
    text:
      'Get free shipping on all orders over €100! and free returns to our Finnish return centre! Items are dispatched from the US and will arrive in 5-8 days.'
  },
  {
    icon: faHandSpock,
    title: 'Amazing customer service',
    text:
      'Get Free Shipping on all orders over €100 and and free returns to our Finnish return centre. Items are dispatched from the US and will arrive in 5-8 days.'
  },
  {
    icon: faHeart,
    title: 'No custom or duty fees!',
    text:
      "We pay these fees so you don't have to! The total billed at checkout is rthe final amount you pay, inclusive of VAT, with no additional charges at hte time of delivery!"
  }
];

export default () => (
  <Wrapper>
    <h1>Amazing Features</h1>
    <FeaturesList>
      {features.map((item, key) => (
        <Feature key={key}>
          <FontAwesomeIcon
            className="icon"
            icon={item.icon}
            size="4x"
            color={Colors.grannySmith}
          />
          <h2>{item.title}</h2>
          <p>{item.text}</p>
        </Feature>
      ))}
    </FeaturesList>
  </Wrapper>
);
