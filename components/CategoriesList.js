import React, { Component } from 'react';
import Category from './Category';
import Util from '../common/Util';
import Card from '../components/Card'
import styled from 'styled-components'

export default class extends Component {
  state = {
    categories: [],
    productsList: [],
    selectedCategory: null,
    show: true
  }
  async componentDidMount() {
    await Util.fetchCategories().then((result) => {
        this.setState({ categories: result });
    })
  }
  onClickCategory = (e, categoryId) => {
    e.preventDefault()
    Util.fetchProducts(categoryId).then(list => {
      this.setState({ productsList: list.results });
    });
  }
  showProductsList = (e) => {
    e.preventDefault()
    this.setState({ show: false})
  }

  render() {
    const { categories, productsList } = this.state;

    const Wrapper = styled.div`
      margin: 30px auto 30px auto;
        padding: 20px 40px 20px 40px;
        max-width: 75em;
        @media only screen and (max-width: 400px) {
          padding: 0px 20px 0px 20px;
        }
      }
    `
    const ListOfCategories = styled.div`
      display: inline-flex;
      justify-content: space-between;
    `
    const CategoryName = styled.div`
      text-align: center;
      margin: 0px 20px 0px 20px;
      padding: 35px 40px 35px 40px;
      a {
        text-decoration: none;
        text-transform: uppercase;
        color: #000000;
      }
      a:hover {
        color: #3a4048;
      }
      a:visited {
        color: #000000;
      }
      & ::selection {
        color: red;
        background: yellow;
      }
      & :nth-child(odd) {
        background-color: #f7f7f7;
      }
      & :nth-child(even) {
        background-color: #f4f2f2;
      }`;
    const SelectedCategory = styled.div`
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
      margin-top: 10em;
    `

    return(
    <Wrapper>
        <ListOfCategories>
          {categories.map((category, i) => <CategoryName key={i}>
              <h2>
                <a href={`/Product?id=${category.id}`} onClick={e => this.onClickCategory(e, category.id)}>
                  {category.name.en}
                </a>
              </h2>
            </CategoryName>)}
        </ListOfCategories>
        <SelectedCategory className="selected_category">
          {productsList.map((item, i) => (
            <Card
              key={i}
              id={item.id}
              name={item.name.en}
              image={item.masterVariant.images[0].url}
              description={item.slug.en}
              price={item.masterVariant.prices[0].value.centAmount}
              currency={item.masterVariant.prices[0].value.currencyCode}
            />
          ))}
        </SelectedCategory>
        </Wrapper>
        );
  }
}
