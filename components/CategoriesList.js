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
    // await Util.fetchCategories().then((result) => {
    //     this.setState({
    //       categories: result,
    //     selectedCategory: result[0] });
    //      Util.fetchProducts(this.state.selectedCategory).then(list => {
    //        this.setState({ productsList: list.results });
    //      });
    // })
    const cats = await Util.fetchCategories();
    const prods = await Util.fetchProducts(cats[0]);
    this.setState(
      {
        categories: cats,
        productsList: prods.results
      }
    );
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
        color: darkslategrey;
        @media only screen and (max-width: 400px) {
          padding: 0px 20px 0px 20px;
        }
      }
    `;
    const ListOfCategories = styled.div`
      margin: 0px auto 2em auto;
      padding-bottom: 5em;
      border-bottom: 1px solid rgba(211, 183, 86, 1);
      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
      :active {
        color: rgba(211, 183, 86, 1);
      }
      :focus {
        color: red;
      }
      :target {
        color: red;
      }
      :nth-child(2n) {
        flex-grow: 1;
      }`;
    const CategoryName = styled.button`
      width: 8em;
      font-size: 22px;
      height: 2em;
      text-align: center;
      margin: 18px;
      border: 1px solid rgba(211, 183, 86, 1);
      text-decoration: none;
      text-transform: uppercase;
      color: #4a4a4a;
      border-radius: 2px;
      :hover {
        background-color: rgba(211, 183, 86, 1);
        color: whitesmoke;
      }
      // a {

      // }
      // a:hover {
      //   color: #d3b756;
      // }
      // a:visited {
      //   color: #4a4a4a;
      // }
      // & ::selection {
      //   color: red;
      //   background: yellow;
      // }
      // :hover {
      //   border-color: #d3b756;
      //   background-color: #d3b756;
      //   color: whitesmoke;
      // }`;
    const SelectedCategory = styled.div`
      display: flex;
      flex-wrap: wrap;
      max-width: 100em;
      margin: 0 auto;
      justify-content: center;
      `
    return <Wrapper>
        <ListOfCategories>
          {categories.map((category, i) => (
            <CategoryName
              key={i}
              href={`/Product?id=${category.id}`}
              onClick={e => this.onClickCategory(e, category.id)}>
            {category.name.en}
            </CategoryName>
          ))}
        </ListOfCategories>
        <SelectedCategory className="selected_category">
          {productsList !== undefined &&
          !(Object.keys(productsList).length === 0) ? (
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
