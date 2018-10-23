import React, { Component } from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'

export default class extends Component {
  render() {

const Wrapper = styled.div`
  h1 {
    text-align: center;
  }
`;
    return (
      <Layout>
        <Wrapper>
            <h1>Careers</h1>
        </Wrapper>
      </Layout>
    );
  }
}
