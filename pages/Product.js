import React, { Component } from 'react'
import Layout from '../components/Layout'
import CoverAllPages from '../common/CoverAllPages'
import ServiceInformation from '../components/ServiceInformation'
import FindPlan from '../components/FindPlan'
import Util from '../common/Util'
import CurrentService from '../components/CurrentService'
import _ from 'lodash';
import Tabs from '../components/Tabs'
import './index'
import Calendar from '../components/Calendar'

export default class extends Component {

  static async getInitialProps({ query, req }) {
    const productId = _.get(query, 'id');
    const product = await Util.fetchProductById(productId);

    return { product }
  }



  render() {

    const { product } = this.props;
    console.log(product);



    const priceInEuro = (product.masterVariant.prices[0].value.centAmount / 100).toFixed(2);


    return <Layout className="About">
        <CoverAllPages className="CoverAllPages" />
        <ServiceInformation
        id={product.id}
        name={product.name.en}
        color={product.masterVariant.attributes[9].value.label.en}
        size={product.masterVariant.attributes[8].value}
        image={product.masterVariant.images[0].url}
        description={product.slug.en}
        sku={product.masterVariant.sku}
        priceInEuro={priceInEuro}
        currency={product.masterVariant.prices[0].value.currencyCode} />

        <FindPlan />
        <style jsx global>
          {`
            * {
              font-family: Verdana;
            }
            .CoverAllPages {
              margin-bottom: 50px;
            }
            .showCalendar-btn {
              text-align: center;
              margin-bottom: 50px;
            }`}
        </style>
      </Layout>;
  }
}
