import React, { Component } from 'react';
import CategoryCard from './CategoryCard';
import Util from '../common/Util';
import ProductsCard from '../components/ProductsCard'
import styled from 'styled-components'
import Category from '../pages/Category'

export default class extends Component {
  state = {
    categories: [],
    productsList: [],
    show: true
  }
  async componentDidMount() {
    const cats = await Util.fetchCategories();
    const prods = await Util.fetchProducts(cats[0].id);
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
      max-width: 100em;
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
  const CategoryName = styled.div`
    background-image: url(https://images.unsplash.com/photo-1489939078242-0a1dc4a08f06?ixlib=rb-0.3.5…EyMDd9&s=c53b328…&auto=format&fit=crop&w=1350&q=80);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: rgba(74, 74, 74, 0.7);
    width: 24em;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 13em;
    text-align: center;
    margin: 18px;
    text-decoration: none;
    text-transform: uppercase;
    color: #4a4a4a;
    border-radius: 2px;
    h1 {
      font-size: 22px;
      background-color: rgba(245,245,245,0.8);
      padding: 30px 30px 30px 30px;
      :hover {
      cursor: pointer;
      color: rgba(245,245,245,);
    }
  }
`
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
            <CategoryCard
            key={i}
            id={category.id}
            name={category.name.en}
            // onClick={e => this.onClickCategory(e, category.id)}
            />
          ))}
        </ListOfCategories>
      </Wrapper>;
  }
}
