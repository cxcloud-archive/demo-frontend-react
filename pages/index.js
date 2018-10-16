import React from 'react';
import Cover from './../components/Cover';
import CurrentServices from '../components/CurrentServices';
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
        const product = await Util.fetchProduct(productId);

        const recommendedProductsId = _.get(query, 'id');
        const recommendedProducts = await Util.fetchRecommendedProducts(recommendedProductsId);

        // from commercetools (demo-api)
        const categoryId = _.get(query);
        const categories = await Util.fetchCommerceCategories(categoryId);

        return {
            user, product, recommendedProducts, categories
        };
    }
    render() {
        const { product, user, recommendedProducts, categories } = this.props;

        return (
            <Layout className="Homepage grid-container">
                <Cover user={user}/>
                <CurrentServices categories={categories} />
                {/* <RecommendedServices /> */}
                <FindPlan />
            </Layout>
        );
    }
}
