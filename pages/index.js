import { Component } from 'react';
import CategoriesList from '../components/CategoriesList';
import { fetchCategories } from '../common/Util';
import Layout from '../components/Layout';
import Features from '../components/Features';
import Cover from '../components/Cover';

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
        <CategoriesList categories={categories} />
        <Features />
      </Layout>
    );
  }
}
