import React, { Component } from 'react';
import EventForm from '../components/EventForm'
import EventList from '../components/EventList'

class EventContainer extends Component {
    render() {
        return (
            <div>
                <EventForm adventure={this.props.adventure} />
                <EventList events={ this.props.adventure && this.props.adventure.events} />
            </div>
        );
    }
}

export default EventContainer;