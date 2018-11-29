import Link from 'next/link';
import styled from 'styled-components';
import { Colors } from '../common/theme';

const Wrapper = styled.div`
  padding: 1.875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Separator = styled.hr`
  width: 100%;
  margin: 1rem 0;
  border: 0;
  border-top: 2px solid ${Colors.concrete};
`;
const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 20rem;
  margin-bottom: 1.875rem;

  a {
    font-weight: 200;
    color: ${Colors.silver};
    font-size: 0.8rem;
  }
`;
const Copyright = styled.div`
  font-size: 0.75rem;
  font-weight: 200;
`;

export default () => (
  <Wrapper>
    <Separator />
    <Navbar>
      <Link href={{ pathname: '/About', query: { name: 'about' } }}>
        <a className="footer-link">About</a>
      </Link>
      <Link href={{ pathname: '/Contact', query: { name: 'contact' } }}>
        <a className="footer-link">Contact us</a>
      </Link>
      <Link href={{ pathname: '/Privacy', query: { name: 'privacy' } }}>
        <a className="footer-link">Privacy Policy</a>
      </Link>
      <Link href={{ pathname: '/Stores', query: { name: 'stores' } }}>
        <a className="footer-link">Store Locator</a>
      </Link>
    </Navbar>
    <Copyright>&copy; 2018 Tieto</Copyright>
  </Wrapper>
);
