import { Component } from 'react';
import { fetchProducts } from '../common/Util';
import styled from 'styled-components';
import Layout from '../components/Layout';
import ProductsCard from '../components/ProductsCard';

const CategoryTitle = styled.h1`
  font-size: 2.3rem;
  letter-spacing: 0.15em;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
`;

const ProductsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default class extends Component {
  static async getInitialProps({ query }) {
    const { id: productId, name: categoryName } = query;
    const products = await fetchProducts(productId);
    return { products, categoryName };
  }

  render() {
    const { products, categoryName } = this.props;

    return (
      <Layout>
        <CategoryTitle>{categoryName}</CategoryTitle>
        <ProductsList>
          {products.length > 0 ? (
            products.map((item, i) => (
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
        </ProductsList>
      </Layout>
    );
  }
}
