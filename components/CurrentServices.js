import React, { Component } from 'react';
import CurrentService from './CurrentService';
import Util from '../common/Util';

export default class extends Component {
    state = {
        categories: [],
    }
    async componentDidMount() {
        await Util.fetchCommerceCategories().then((result) => {
            this.setState({ categories: result });
        })
    }
    render() {
      console.log(this.state.categories)
        return <div className="CurrentServices">
            <h2 className="currServ-title title">
              These are the services we are providing you at the moment:
            </h2>
            <div className="currentServices-sub">
              {this.state.categories.map((item, i) => (
                <p key={i}>{item.name.en}</p>
              ))}
              {/* {this.state.categories.map((item, i) => (
                        <CurrentService
                            productId={item.sys.id}
                            key={i}
                            productName={item.fields.productName}
                            productCode={item.fields.productCode}
                            productHighlight={item.fields.productHighlight}
                            price={item.fields.price}
                            longDescription={item.fields.longDescription}
                            productShortDescription={item.fields.productShortDescription}
                            image={item.fields.imageLink}>
                        </CurrentService>
                    ))} */}
            </div>
            <style jsx>
              {`
                .CurrentServices {
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
