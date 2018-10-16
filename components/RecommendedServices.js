import React, { Component } from 'react';
import RecommendedService from './RecommendedService';
import Util from '../common/Util';

export default class extends Component {
    state = {
        recommendedProducts: [],
    }
    async componentDidMount() {
        await Util.fetchRecommendedProducts().then((result) => {
            this.setState({ recommendedProducts: result.items });
        })
    }
    render() {
        const {
            productId,
            productName,
            productCode,
            productHighlight,
            price,
            longDescription,
            productShortDescription,
            availability
        } = this.state
        return (
            <div className="RecommendedServices">
                <h2 className="recommServ-title title">We recommend these services for you, John:</h2>
                <div className="recommServices-sub">
                    {this.state.recommendedProducts.map((item, i) => (
                        <RecommendedService
                            key={i}
                            productId={item.sys.id}
                            productName={item.fields.productName}
                            productCode={item.fields.productCode}
                            productHighlight={item.fields.productHighlight}
                            price={item.fields.price}
                            longDescription={item.fields.longDescription}
                            productShortDescription={item.fields.productShortDescription}
                            image={item.fields.imageLink} />
                    ))}
                </div>
                <style jsx>
                    {`
                        .RecommendedServices {
                            margin-left: auto;
                            margin-right: auto;
                        }
                        .recommServices-sub {
                            display: grid;
                            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                        }
                    `}
                </style>
            </div>
        );
    }
}