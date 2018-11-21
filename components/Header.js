import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/fontawesome-free-solid';

const Wrapper = styled.div`
  margin: 1.25rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ul {
    padding-right: 2.5rem;
    display: flex;

    li {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 1.125rem;
      font-weight: 500;
      margin: auto 1.25rem;

      a {
        display: flex;
        flex-direction: row;
        align-items: center;
        text-decoration: none;
      }

      p {
        margin-right: 0.625rem;
      }
    }
  }
`;

export default () => (
  <Wrapper>
    <Link href={{ pathname: '/' }}>
      <a>
        <img src="../static/images/cx-cloud-logo.png" />
      </a>
    </Link>
    <ul>
      <li>
        <Link href={{ pathname: '/' }}>
          <a>
            <p>Home</p>
            <FontAwesomeIcon icon={faAngleDown} />
          </a>
        </Link>
      </li>
      <li>
        <Link href={{ pathname: '/CategoryPage' }}>
          <a>
            <p>Categories</p>
            <FontAwesomeIcon icon={faAngleDown} />
          </a>
        </Link>
      </li>
      <li>
        <Link href={{ pathname: '/About' }}>
          <a>
            <p>About</p>
            <FontAwesomeIcon icon={faAngleDown} />
          </a>
        </Link>
      </li>
    </ul>
  </Wrapper>
);
