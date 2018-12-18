import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars } from '@fortawesome/fontawesome-free-solid';
import { Device } from '../common/theme';

const Wrapper = styled.div`
  margin-right: 1rem;

  .menu-items {
    display: flex;
  }
  .icon {
    font-size: 2rem;
    display: none;
  }

  @media ${Device.mobile} {
    .icon {
      display: block;
    }
    .menu-items {
      display: none;
    }
  }
`;

const MenuItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.125rem;
  font-weight: 500;
  margin-left: 2rem;

  a {
    display: flex;
    flex-direction: row;
    align-items: center;

    span {
      margin-right: 0.5rem;
    }
  }
`;

const items = [
  {
    pathname: '/',
    text: 'Home'
  },
  {
    pathname: '/CategoryPage',
    text: 'Categories'
  },
  {
    pathname: '/About',
    text: 'About'
  }
];

export default () => (
  <Wrapper>
    <FontAwesomeIcon icon={faBars} className="icon" />
    <div className="menu-items">
      {items.map((item, key) => (
        <MenuItem key={key}>
          <Link href={{ pathname: item.pathname }}>
            <a>
              <span>{item.text}</span>
              <FontAwesomeIcon icon={faAngleDown} />
            </a>
          </Link>
        </MenuItem>
      ))}
    </div>
  </Wrapper>
);
