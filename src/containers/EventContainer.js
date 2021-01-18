import React, { Component } from 'react';
import { connect } from 'react-redux'
//import EventForm from '../components/EventForm'
//import EventList from '../components/EventList'
import { fetchEvents, deleteEvent, addEvent } from '../actions/EventsActions'
import AdventureContainer from '../containers/AdventureContainer'
import Adventure from '../components/Adventure'
class EventContainer extends Component {
    componentDidMount() {
        this.props.fetchEvents()
    }
    render() {
        return (
            <div>
                <Adventure />
                <AdventureContainer />
                <EventContainer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {events: state.events}
 }
 export default connect(mapStateToProps, { fetchEvents, deleteEvent, addEvent })(EventContainer);