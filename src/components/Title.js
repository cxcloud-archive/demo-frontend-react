import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 10em;
  h1 {
    font-size: 38px;
    letter-spacing: 6px;
    font-weight: 400;
    text-align: center;
    text-transform: uppercase;
  }
`;

export default ({ name }) => (
  <Wrapper>
    <h1>{name}</h1>
  </Wrapper>
);
