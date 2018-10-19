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
    categories: [],
    productsList: [],
    show: true
  }
  async componentDidMount() {
    await Util.fetchCommerceCategories().then((result) => {
        this.setState({ categories: result });
    })

    // await Util.fetchCommerceProducts().then(list => {
    //   this.setState({ productsList: list.results });
    // });
  }

  showProductsList = (e) => {
    e.preventDefault()
    this.setState({ show: false})
  }
  toggle = () => {
      this.setState({ shown: !this.state.shown })
  }

  render() {
    const { productsList, categories } = this.state
    console.log(productsList)

    return <Layout className="About">
      {/* <CoverAllPages className="CoverAllPages" productName={item.productName} /> */}
      {/* <ServiceInformation
        name={item.name.en}
        image={item.masterVariant.images[0].url}
        description={item.slug.en}
        price={item.masterVariant.prices[0].value.centAmount}
        currency={item.masterVariant.prices[0].value.currencyCode} /> */}

      <div className="showCalendar-btn">
        <button className="readMore" onClick={this.toggle}>
          {' '}
          > More options in the full calendar
        </button>
        {this.state.shown ? <Calendar /> : null}
      </div>
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
          }`}
      </style>
    </Layout>;
  }
}
