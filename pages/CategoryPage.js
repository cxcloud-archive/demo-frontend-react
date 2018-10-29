import React, { Component } from 'react'
import Link from 'next/link'
import Util from '../common/Util'
import CategoriesList from '../components/CategoriesList'
import styled from 'styled-components'
import Layout from '../components/Layout'
import CoverAllPages from '../common/CoverAllPages'
import ProductDetails from '../components/ProductDetails'
import FindPlan from '../components/FindPlan'
import CategoryCard from '../components/CategoryCard'
import _ from 'lodash'
import './index'
import ProductsCard from '../components/ProductsCard';
import Title from '../components/Title'


export default class extends Component {

  static async getInitialProps({ query, req }) {
    const productId = _.get(query, 'id');
    const productsList = await Util.fetchProducts(productId);

    const categoryId = _.get(query, 'id');
    const categories = await Util.fetchCategories(categoryId);

    return { productsList, categories };
  }
  render() {
    const { productsList, categories } = this.props;

    const SelectedCategory = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 100em;
    justify-content: center;
    margin: 0 auto;
    `
    console.log(productsList)


      return (
      <Layout>
        <CoverAllPages className="CoverAllPages" />
        <Title />
        {/* {
            categories.map((item, i) => (
              <h1>{item.name.en}</h1>
            ))
        } */}
          <SelectedCategory className="selected_category">
            {productsList !== undefined &&
              !(Object.keys(productsList).length === 0) ? (
                productsList.results.map((item, i) => (
                  <ProductsCard
                    key={i}
                    id={item.id}
                    name={item.name.en}
                    image={item.masterVariant.images[0].url}
                    description={item.slug.en}
                    price={item.masterVariant.prices[0].value.centAmount}
                    currency={item.masterVariant.prices[0].value.currencyCode}
                  />
                ))
              ) : (
                <p>No Products To Show</p>
              )}
          </SelectedCategory>

      </Layout>
    )

  }
}


