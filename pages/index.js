import React from 'react';
import CategoriesList from '../components/CategoriesList';
import FindPlan from '../components/FindPlan';
import Util from '../common/Util';
import Layout from '../components/Layout';
import Header from '../components/Header'
import Features from '../components/Features'
import Cover from '../components/Cover'
import Ads from '../components/Ads'
import _ from 'lodash';


export default class extends React.Component {
  static async getInitialProps({ query, req }) {
    const productId = _.get(query, 'id');
    const commerceProducts = await Util.fetchProducts(productId);

    const categoryId = _.get(query);
    const categories = await Util.fetchCategories(categoryId);

    return { commerceProducts, categories };
  }
  render() {
    const { commerceProducts, categories } = this.props;
    return (
      <Layout className="Homepage">
        <Cover />
        <CategoriesList categories={categories} />
        <Features />
        <Ads />
      </Layout>
    );
  }
}
