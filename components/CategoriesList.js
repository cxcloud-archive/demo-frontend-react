import CategoryCard from './CategoryCard';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  max-width: 45rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(11rem, 1fr));
  grid-gap: 1.25rem;
`;

export default ({ categories = [] }) => (
  <Wrapper>
    {categories.map((category, i) => (
      <CategoryCard key={i} id={category.id} name={category.name.en} />
    ))}
  </Wrapper>
);
