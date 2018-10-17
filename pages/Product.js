import React, { Component } from 'react'
import Layout from '../components/Layout'
import CoverAllPages from '../common/CoverAllPages'
import ServiceInformation from '../components/ServiceInformation'
import FindPlan from '../components/FindPlan'
import Util from '../common/Util'
import CurrentService from '../components/CurrentService'
import _ from 'lodash';
import Tabs from '../components/Tabs'
import Calendar from '../components/Calendar'

export default class extends Component {
    state = {
        shown: false
    }

    static async getInitialProps({ query, req }) {
        const productId = _.get(query, 'id');
        const product =await Util.fetchProductById(productId);

        const recommendedProductsId = _.get(query, 'id');
        const recommendedProducts = await Util.fetchRecommendedProducts(recommendedProductsId);

        const customerTestimonialsId = _.get(query, 'id');
        const customerTestimonials = await Util.fetchCustomerTestimonials(customerTestimonialsId);

        const twitterFeedsId = _.get(query, 'id');
        const twitterFeeds = await Util.fetchTwitterFeeds(twitterFeedsId);

        const technicalSpecId = _.get(query, 'id');
        const technicalSpecs = await Util.fetchTechnicalSpecifications(technicalSpecId);

        const calcOfSavingId = _.get(query, 'id');
        const calcOfSavings = await Util.fetchCalculationsOfSavings(calcOfSavingId);

        return {
            product,
            recommendedProducts,
            customerTestimonials,
            twitterFeeds,
            technicalSpecs,
            calcOfSavings
        };
    }
    toggle = () => {
        this.setState({ shown: !this.state.shown })
    }
    render() {

      //console.log('hello')

        const item = this.props.product.items[0].fields || this.props.recommendedProducts.items[0].fields
        const customerTestim = this.props.customerTestimonials.items;
        const twitterFeeds = this.props.twitterFeeds.items;
        const technicalSpecs = this.props.technicalSpecs.items;
        const calcOfSavings = this.props.calcOfSavings.items;

        return (
            <Layout className="About">
                <CoverAllPages
                    className="CoverAllPages"
                    productName={item.productName} />
                <ServiceInformation
                    className="ServiceInformation"
                    productName={item.productName}
                    productCode={item.productCode}
                    productHighlight={item.productHighlight}
                    price={item.price}
                    longDescription={item.longDescription}
                    image={item.imageLink}
                    productShortDescription={item.productShortDescription}
                    availability={item.availability} />
                <div className="showCalendar-btn">
                    <button className="readMore" onClick={this.toggle}> > More options in the full calendar</button>
                    {this.state.shown ? <Calendar /> : null}
                </div>
                <Tabs
                    customerTestimonials={customerTestim}
                    twitterFeeds={twitterFeeds}
                    technicalSpecs={technicalSpecs}
                    calcOfSavings={calcOfSavings} />
                <FindPlan />
                <style jsx global>
                    {`
                        * {
                            font-family: Verdana;
                        }
                        .CoverAllPages {
                            margin-bottom: 50px;
                        }
                        .showCalendar-btn {
                            text-align: center;
                            margin-bottom: 50px;
                        }
                    `}
                </style>
            </Layout>
        );
    }
}
