import React, { Component } from 'react';
import Layout from '../components/Layout';
import * as jQuery from 'jquery'

export default class extends Component {
    componentDidMount() {
        $(document).ready(function () { 
            $('#calendar').fullCalendar({
                selectable: true,
                defaultView: 'agendaFourDay',
                groupByResource: true,
                header: {
                    left: 'prev,next',
                    center: 'title',
                    right: 'agendaDay,agendaFourDay'
                },
                views: {
                    agendaFourDay: {
                        type: 'agenda',
                        duration: { days: 4 }
                    }
                },
                duration: {
                    default: '02:00:00'
                },
                select: function (start, end, jsEvent, view) {
                    var abc = prompt('Enter Title');
                    var allDay = !start.hasTime && !end.hasTime;
                    var newEvent = new Object();
                    newEvent.title = abc;
                    newEvent.start = moment(start).format();
                    newEvent.allDay = false;
                    $('#calendar').fullCalendar('renderEvent', newEvent);
                },
                eventRender: function (event, element, view) {
                    if (view.name == 'listDay') {
                        element.find(".fc-list-item-time").append("<span class='closeon'>X</span>");
                    } else {
                        element.find(".fc-content").prepend("<span class='closeon'>X</span>");
                    }
                    element.find(".closeon").on('click', function () {
                        $('#calendar').fullCalendar('removeEvents', event._id);
                        console.log('delete');
                    });
                },
                selectAllow: function (selectInfo) {
                    var duration = moment.duration(selectInfo.end.diff(selectInfo.start));
                    return duration.asHours() <= 1;
                },
                businessHours: {
                    dow: [1, 2, 3, 4, 5],
                    start: '08:00', 
                    end: '17:00', 
                },
                hiddenDays: [0, 6],  
                resources: [
                    { id: 'a', title: 'Room A' },
                    { id: 'b', title: 'Room B' }
                ],
                drop: function () {
                    if ($('#drop-remove').is(':checked')) {
                        $(this).remove();
                    }
                }
            })
            $('#external-events .fc-event').each(function () {
                $(this).data('event', {
                    title: $.trim($(this).text()), 
                    stick: true
                });
            });
        })
    }
    render() {
        return (
            <Layout>
                <div>
                    <h1>Careers</h1>
                    <div id="calendar"></div>
                </div>
                <style jsx>
                    {`
                        * {
                            padding: 1px;
                            border: 1px solid black;
                        }
                        #calendar {
                            margin: 0 auto;
                            width: 50%;
                            height: 50%;
                        }
                        h1 {
                            text-align: center;
                        }
                    `}
                </style>
            </Layout>
        );
    }
}


