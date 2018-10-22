import React, { Component } from 'react';
import Category from './Category';
import Util from '../common/Util';
import Card from '../components/Card'

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

    return <div className="CategoriesList">
      <div className="list_of_categories">
        {categories.map((category, i) => <div className="category">
            <h2 key={i}>
              <a href={`/Product?id=${category.id}`} onClick={e => this.onClickCategory(e, category.id)}>
                {category.name.en}
              </a>
            </h2>
          </div>)}
      </div>
      <div className="selected_category">
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
      </div>
      <style jsx>
        {`
          .CategoriesList {
            margin: 30px auto 30px auto;
          }
          .list_of_categories {
            display: flex;
            justify-content: space-between;
          }
          .category {
            text-align: center;
            padding: 35px 40px 35px 40px;
          }
          .category a {
            text-decoration: none;
            text-transform: uppercase;
          }
          .category ::selection {
            color: red;
            background: yellow;
          }
          .category:nth-child(odd) {
            background-color: #f7f7f7;
          }
          .category:nth-child(even) {
            background-color: #f4f2f2;
          }
          .selected_category {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
            margin-top: 10em;
          }`}
      </style>
    </div>;
  }
}
