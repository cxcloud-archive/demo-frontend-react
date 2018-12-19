import styled from 'styled-components';

const Wrapper = styled.div`
  background-image: url('https://www.zastavki.com/pictures/originals/2013/Girls___Beautyful_Girls___Girl_on_white_background_041541_.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 86vh;
  width: 100%;
  background-position-x: right;
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 10%;
    h2 {
      font-size: 2.25rem;
      margin: 0;
    }
    h1 {
      margin: 0;
      font-size: 3.125rem;
      text-transform: uppercase;
    }
  }
`;

export default () => (
  <Wrapper>
    <div>
      <h2>Welcome to</h2>
      <h1>CX-Cloud E-shop</h1>
    </div>
  </Wrapper>
);
