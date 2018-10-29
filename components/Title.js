import React, { Component } from 'react';

export default class extends Component {
  static async getInitialProps({ query, req }) {

  }

  render() {
    const { name } = this.props;

    return(
      <div className="page-title">
        <h1>Welcome to {name}!</h1>
        <style jsx>
            {`
                .page-title h1 {
                    color: black;
                    font-size: 24px;
                    text-align: center;
                }
            `}
        </style>
      </div>
    )
  }
}
