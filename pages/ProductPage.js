import { Component } from 'react';
import Layout from '../components/Layout';
import ProductDetails from '../components/ProductDetails';
import { fetchProductById } from '../common/Util';

export default class extends Component {
  static async getInitialProps({ query }) {
    const { id: productId } = query;
    const product = await fetchProductById(productId);
    return { product };
  }
  render() {
    const { product } = this.props;
    const priceInEuro = (
      product.masterVariant.prices[0].value.centAmount / 100
    ).toFixed(2);

    return (
      <Layout>
        <ProductDetails
          id={product.id}
          name={product.name.en}
          color={
            product.masterVariant.attributes.find(
              product => product.name === 'color'
            ).value.label.en
          }
          size={
            product.masterVariant.attributes.find(
              product => product.name === 'size'
            ).value
          }
          image={product.masterVariant.images[0].url}
          sku={product.masterVariant.sku}
          priceInEuro={priceInEuro}
          currency={product.masterVariant.prices[0].value.currencyCode}
        />
      </Layout>
    );
  }
}
