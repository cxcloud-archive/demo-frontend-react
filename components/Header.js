import Link from 'next/link';
import styled from 'styled-components';
import Navigation from './Navigation';

const Wrapper = styled.div`
  margin: 1.25rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 4rem;
`;

export default () => (
  <Wrapper>
    <Link href={{ pathname: '/' }}>
      <a>
        <Logo src="../static/images/cx-cloud-logo.png" />
      </a>
    </Link>
    <Navigation />
  </Wrapper>
);
