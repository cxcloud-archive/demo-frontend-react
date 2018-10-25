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


const Wrapper = styled.div`
  color: darkslategrey;
  div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  }
`;
    return (
      <Wrapper>
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
