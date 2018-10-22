import React, { Component } from 'react'
import Link from 'next/link'
import Util from '../common/Util'
import styled from 'styled-components'

export default class extends Component {
  state = {
    categories: [],
    productsList: []
  };
  async componentDidMount() {
    await Util.fetchCategories().then(result => {
      this.setState({ categories: result });
    });

    await Util.fetchProducts().then(result => {
      this.setState({ productsList: result });
    });
  }
  render() {
    return (
      <Wrapper>
        <h2 className="currServ-title title">
          subcategories
        </h2>
        <div className="selected_category">
          {this.state.categories.map((item, i) => (
            <p key={i}>
              <a href={'/Subcategory?id='}>{item.name.en}</a>
            </p>
          ))}
        </div>
      </Wrapper>
    );
  }
}
const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  }
`;
