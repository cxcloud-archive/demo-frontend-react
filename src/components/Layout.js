import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  font-family: Helvetica, Geneva, Tahoma, sans-serif;
  color: #2f4f4f;
`;

export default ({ children }) => (
  <Wrapper>
    <Header global />
    <main className="main">{children}</main>
    <Footer />
  </Wrapper>
);
