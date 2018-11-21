import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: #2f4f4f;
  margin: 2.5rem 1.25rem auto 1.25rem;
  width: 14em;
  border-color: transparent;
  height: 10em;
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
  background-color: #f5f5f5;
  background-repeat: no-repeat;
  background-size: cover;
  a {
    padding: 1.25rem;
    font-size: 1rem;
    text-transform: uppercase;
    background-color: rgba(255,255,255, 0.9);
    text-decoration: none;
    color: initial;
  }
  :first-child {
    background-image: url(http://www.pngmart.com/files/3/Beautiful-Girl-Transparent-Background.png);
    background-position-x: -2rem;
  }
  :nth-child(2) {
    background-image: url(http://www.pngmart.com/files/1/Women-Bag-Transparent-Background.png);
    background-position: center;
  }
  :nth-child(3) {
    background-image: url(http://www.pngmart.com/files/3/Branded-Watch-PNG-Pic.png);
  }
  :nth-child(4) {
    background-image: url(http://www.pngmart.com/files/3/Sunglasses-PNG-Transparent-Image.png);
    background-position-y: 1.75rem;
    background-position-x: -0.5rem;
  }
  :nth-child(5) {
    background-image: url(http://www.pngmart.com/files/7/Guy-Transparent-Images-PNG.png);
    background-position-y: 0.625rem;
    background-position-x: 3.875rem;
  }
  :nth-child(6) {
    background-image: url(http://www.pngmart.com/files/5/Purse-PNG-File.png);
  }
}
`;

export default ({ id, name }) => (
  <Wrapper>
    <Link href={`/CategoryPage?name=${name}&id=${id}`}>
      <a>{name}</a>
    </Link>
  </Wrapper>
);
