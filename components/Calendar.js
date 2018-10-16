import React, { Component } from 'react';
import Link from 'next/link'
import Util from '../common/Util'

export default class extends Component {
    componentDidMount() {
        var widget = new TimekitBooking();
        widget.init({
            app_key: 'test_widget_key_a9NEulAS6f0FC104ngNFBoXj6zCRvPYA',
            project_id: 'cba0ed3e-ebf3-40d8-a091-087fa274945f'
        });
    }
    render() {
        return (
            <div>
                <div>
                    <h3>Book a meeting with CXCloud engineer</h3>
                    <div id="bookingjs"></div>
                </div>
                <style jsx>
                {`
                    #bookingjs {
                        width: 50%;
                    }
                    .Calendar h3 {
                        text-align: center;
                    }
                    .riddle_target {
                        margin: 0 auto,
                        maxWidth: 1200px,
                        width: 1200px
                    }
                    .fc-slats table tbody {
                        overflow: hidden;
                    }
                `}
                </style>
            </div>
        );
    }
}