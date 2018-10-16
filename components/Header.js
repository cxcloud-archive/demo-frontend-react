import React, { Component } from 'react';
import Link from 'next/link'
import Util from '../common/Util'

export default class extends Component {
    static async getInitialProps({ query, req }) {
        const userId = _.get(query, 'id');
        const users = await Util.fetchUsers(productId);
        const user = users.items[0].fields

        return user
    }
    render() {
        return (
            <div className="Header header">
                <div className="logo grid-item">
                    <Link href="/">
                        <a>
                            <img className="logo-icon" src="/static/images/cxcloud_operator_logo.jpg" alt="blank" />
                        </a>
                    </Link>
                </div>
                <div className="header-title grid-item">
                    <p>The best <span>imaginery</span> operator in the world.</p>
                </div>
                <div className="header-userName grid-item">
                    <div className="sub-container">
                        <p className="medium"></p>
                        <p className="medium logout-btn"><a href="">Logout</a></p>
                    </div>
                </div>
                <style jsx>
                    {`
                    .Header {
                        background-color: #fff;
                        display: flex;
                        flex-direction: row;
                        text-align: center;
                        align-items: center;
                    }
                    .grid-item {
                        flex: auto 1 1;
                        justify-content: flex-start;
                        display: flex;
                        margin: auto 10px auto 10px;
                    }
                    .logo-icon {
                        height: auto;
                        width: 170px;
                        height: auto;
                        margin-left: 30px;
                    }
                    .sub-container {
                        display: inline-flex;
                        justify-content: flex-end;
                        width: 100%;
                        margin-right: 10px;
                    }
                    .header-title p {
                        color: #939393;
                        font-weight: 200;
                    }
                    .header-title span {
                        color: #ff3764;
                    }
                    .header-userName {
                        display: inline-flex;
                    }
                    .logout-btn {
                        margin-left: 30px;
                        text-decoration: underline;
                    }
                    @media only screen and (max-width: 480px) {
                        .Header {
                            display: flex;
                            flex-direction: column;
                        }
                        .sub-container {
                            margin-right: 0;
                        }
                        .logo-icon {
                            margin-left: 0;
                        }
                    }
                `}
                </style>
            </div>
        );
    }
}