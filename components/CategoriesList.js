import CategoryCard from './CategoryCard';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 100em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  @media only screen and (max-width: 1600px) {
    max-width: 65em;
  }
`;

export default ({ categories = [] }) => (
  <Wrapper>
    {categories.map((category, i) => (
      <CategoryCard key={i} id={category.id} name={category.name.en} />
    ))}
  </Wrapper>
);
