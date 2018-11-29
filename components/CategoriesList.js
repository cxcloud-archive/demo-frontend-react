import CategoryCard from './CategoryCard';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 1.875rem auto;
  padding: 1.25rem 2.5rem;
  @media only screen and (max-width: 400px) {
    padding: 0 1.25rem;
  }
`;
const ListOfCategories = styled.div`
  margin: 0 auto 2em auto;
  max-width: 100em;
  padding-bottom: 5em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  :active {
    color: rgba(211, 183, 86, 1);
  }
  :nth-child(2n) {
    flex-grow: 1;
  }
  @media only screen and (max-width: 1600px) {
    max-width: 65em;
  }
`;

export default ({ categories = [] }) => (
  <Wrapper>
    <ListOfCategories>
      {categories.map((category, i) => (
        <CategoryCard key={i} id={category.id} name={category.name.en} />
      ))}
    </ListOfCategories>
  </Wrapper>
);
