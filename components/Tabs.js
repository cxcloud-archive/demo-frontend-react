import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default class extends Component {
    state = { tabIndex: 0 };
    render() {
        const { 
            twitterFeeds, 
            customerTestimonials, 
            calcOfSavings, 
            technicalSpecs 
        } = this.props;
        
        return (
            <div>
                <div>
                    <Tabs className="tabs" onSelect={tabIndex => this.setState({ tabIndex })}>
                <div className="tabTitle-container">
                    <TabList className="tabList" >
                        <Tab selected className="tabTitle big">Customer testimonials</Tab>
                        <Tab className="tabTitle big">Calculations of savings</Tab>
                        <Tab className="tabTitle big">Technical specifications</Tab>
                    </TabList>
                    </div>
                        <TabPanel className="tabPanel active customerTestimonials">
                            <div className="twitter-container"> 
                                <h2>Twitter love</h2>
                                {twitterFeeds.map((twitter, i) =>
                                <div key={i} className="twitter">
                                    <div>
                                        <p>@{twitter.fields.feed}</p>
                                        <div className="twitterAuthor">
                                            <img className="twitterImg" src={twitter.fields.twitterPicture} alt="blank" />
                                            <p>@{twitter.fields.author}</p>
                                        </div>
                                    </div>
                                </div>
                                )}
                            </div>
                            <div className="testomonials-container">
                                {customerTestimonials.map((person, i) =>
                                    <div key={i} className="testimonials">
                                        <h3>"{person.fields.title}"</h3>
                                        <div className="review">
                                            <img className="profileImg" src={person.fields.profilePicture} alt="blank" />
                                            <div className="review-text">
                                                <p>{person.fields.testimoniance}</p>
                                                <p>{person.fields.firstName} {person.fields.lastName}, {person.fields.city}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </TabPanel>
                        <TabPanel className="tabPanel">
                            {calcOfSavings.map((item, i) =>
                                <div key={i} className="calcOfSavings">
                                    <h4>"{item.fields.title}"</h4>
                                    <p>{item.fields.description}</p>
                                </div>
                            )}
                        </TabPanel>
                        <TabPanel className="tabPanel">
                            {technicalSpecs.map((item, i) =>
                                <div key={i} className="technicalSpecs">
                                    <h4>"{item.fields.title}"</h4>
                                    <p>{item.fields.description}</p>
                                </div>
                            )}
                    </TabPanel>
                </Tabs>
                </div>
                <style>
                    {`
                    .tabs {
                        margin: 0 auto;
                        background-color: #EDECED;
                        padding-bottom: 20px;
                        margin-bottom: -20px;
                    }
                    .tabTitle-container {
                        display: flex;
                        justify-content_ center;
                        background-color: white;
                    }
                    .tabList {
                        display: inline-flex;
                        margin: 0 auto;
                        list-style: none;
                        padding: 0;
                    }
                    .tabTitle {
                        font-weight: bold;
                        font-size: 24px;
                        cursor: pointer;
                        background-color: white;
                        padding: 12px 30px 12px 30px;
                    }
                    .react-tabs__tab--selected {
                        background-color: #EDECED;
                    }
                    .tabPanel {
                        max-width: 60em;
                        line-height: 24px;
                        font-size: 18px;
                        margin: 0 auto;
                    }
                    .tabPanel h3 {
                        font-size: 24px;
                    }
                    .review {
                        display: inline-flex;
                        align-items: center;
                    }
                    .review-text {
                        display: columns;
                    }
                    .profileImg {
                        width: 12em;
                        height: 8em;
                        margin-right: 20px;
                    }
                    .customerTestimonials {
                        display: flex;
                        justify-content: center;
                    }
                    .twitter {
                        max-width: 50em;
                    }
                    .twitterImg {
                        width: 20px;
                        height: 20px;
                        margin-right: 10px;
                    }
                    .twitterAuthor {
                        display: inline-flex;
                        align-items: center;
                        margin-top: -22px;
                        color: blue;
                        font-weight: bold;
                    }
                    .testomonials-container {
                        margin-left: 50px;
                    }
                    .testimonials {
                        display: columns;
                    }
                    .testimonials h3 {
                        margin-bottom: -5px;
                    }
                    @media only screen and (max-width : 1200px) {
                        
                        .customerTestimonials {
                            padding: 0 40px 0 40px;
                            justify-content: center;
                            display: flex;
                            flex-direction: column-reverse;
                        }
                        .tabTitle {
                            padding-left: 10px;
                            padding-right: 10px;
                        }
                    }
                    @media only screen and (max-width : 540px) {
                        .tabList {  
                            padding-left: 0;
                            display: flex;
                            flex-direction: column;
                        }
                    }
                    @media only screen and (max-width : 780px) {
                        .review {
                            display: flex;
                            flex-direction: column;
                        }
                        .testimonials h3 {
                            margin-bottom: 15px;
                        }
                    }
                `}
                </style>
            </div>
        );
    }
}