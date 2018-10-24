import React, { Component } from 'react';
import Category from './Category';
import Util from '../common/Util';
import Card from '../components/Card'
import styled from 'styled-components'

export default class extends Component {
  state = {
    categories: [],
    productsList: [],
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
    console.log(categories)

    const Wrapper = styled.div`
      margin: 30px auto 30px auto;
        padding: 20px 40px 20px 40px;
        @media only screen and (max-width: 400px) {
          padding: 0px 20px 0px 20px;
        }
      }
    `
    const ListOfCategories = styled.div`
      margin: 0px auto 10em auto;
      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
      :nth-child(2n) {
        flex-grow: 1;
      }`
    const CategoryName = styled.div`
      width: 10em;
      max-width: 12em;
      text-align: center;
      margin: 10px 10px 10px 10px;
      padding: 35px 40px 35px 40px;
      box-shadow: 5px 7px rgba(74, 74, 74, 0.7);
      a {
        text-decoration: none;
        text-transform: uppercase;
        color: #4a4a4a;
      }
      a:hover {
        color: #4a4a4a;
      }
      a:visited {
        color: #4a4a4a;
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
      display: flex;
      flex-wrap: wrap;
      max-width: 100em;
      margin: 0 auto;
      justify-content: center;
      `
    return <Wrapper>
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
          {productsList !== undefined && !(Object.keys(productsList).length === 0) ? (
            productsList.map((item, i) => (
              <Card
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
      </Wrapper>;
  }
}
