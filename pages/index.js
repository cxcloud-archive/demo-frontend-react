import { Component } from 'react';
import CategoriesList from '../components/CategoriesList';
import { fetchCategories } from '../common/Util';
import Layout from '../components/Layout';
import Features from '../components/Features';
import Cover from '../components/Cover';
import styled from 'styled-components';
import Separator from '../components/Separator';

const Wrapper = styled.div`
  padding: 1.875rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.5rem;
  justify-items: center;
`;

export default class extends Component {
  static async getInitialProps({ query, req }) {
    const categories = await fetchCategories();
    return { categories };
  }
  render() {
    const { categories } = this.props;
    return (
      <Layout>
        <Cover />
        <Wrapper>
          <CategoriesList categories={categories} />
          <Separator />
          <Features />
        </Wrapper>
      </Layout>
    );
  }
}
