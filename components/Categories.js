import React, { Component } from 'react';
import CurrentService from './CurrentService';
import Util from '../common/Util';
import Card from '../components/Card'

export default class extends Component {
    state = {
        categories: [],
        productsList: [],
        show: true
    }
    async componentDidMount() {
        await Util.fetchCommerceCategories().then((result) => {
            this.setState({ categories: result });
        })

        await Util.fetchCommerceProducts().then(list => {

          this.setState({ productsList: list.results });
        });
    }

    showProductsList = (e) => {
      e.preventDefault()
      this.setState({ show: false})
    }

    render() {

      const { productsList, categories } = this.state
      console.log(categories)
      //console.log(productsList)
        return <div className="Categories">
            <h2 className="currServ-title title">
              These are the services we are providing you at the moment:
            </h2>
            <div className="currentServices-sub">
              {categories.map((item, i) => <p key={i}>
                  <a href={`/Product?id=`}>{item.name.en}</a>
                </p>)}
            </div>

            <div className="currentServices-sub">
              {productsList.map((item, i) =>
                <p key={i}>
                  <Card
                    name={item.name.en}
                    image={item.masterVariant.images[0].url}
                    description={item.slug.en}
                    price={item.masterVariant.prices[0].value.centAmount}
                    currency={item.masterVariant.prices[0].value.currencyCode}
                  />
                </p>)}
            </div>
            <style jsx>
              {`
                .Categories {
                  margin-left: auto;
                  margin-right: auto;
                }
                .currentServices-sub {
                  display: grid;
                  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
                }`}
            </style>
          </div>;
    }
}
