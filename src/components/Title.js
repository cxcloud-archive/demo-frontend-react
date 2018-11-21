import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 10em;
  h1 {
    color: #2f4f4f;
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
