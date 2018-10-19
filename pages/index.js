import React from 'react';
import Cover from './../components/Cover';
import Categories from '../components/Categories';
import RecommendedServices from '../components/RecommendedServices';
import FindPlan from '../components/FindPlan';
import Util from '../common/Util';
import Layout from '../components/Layout';
import Header from '../components/Header'
import _ from 'lodash';

export default class extends React.Component {
    static async getInitialProps({ query, req }) {
      // from contentful (old fake api)
      const userId = _.get(query, 'id');
        const users = await Util.fetchUsers(productId);
        const user = users.items[0].fields

        const productId = _.get(query, 'id');
        const commerceProducts = await Util.fetchCommerceProducts(productId);

        const recommendedProductsId = _.get(query, 'id');
        const recommendedProducts = await Util.fetchRecommendedProducts(recommendedProductsId);

        // from commercetools (demo-api)
        const categoryId = _.get(query);
        const categories = await Util.fetchCommerceCategories(categoryId);

        return { user, commerceProducts, recommendedProducts, categories };
    }
    render() {
        const { commerceProducts, user, recommendedProducts, categories } = this.props;
      //console.log(commerceProducts.results[0].name.en)
        return (
            <Layout className="Homepage grid-container">
                <Cover user={user}/>
                <Categories categories={categories} />
                {/* <RecommendedServices /> */}
                <FindPlan />
            </Layout>
        );
    }
}
