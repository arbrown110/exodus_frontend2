import React from 'react'
import EventForm from '../components/EventForm'
import { connect } from 'react-redux'
import { fetchAdventures} from '../actions/AdventuresActions'


class Adventure extends React.Component {
    componentDidMount () {
        this.props.fetchAdventures(this.props.match.params.id)
        
    }
    render() {
        const adventures = this.props.avdentures.map
        
        return (
            <div>
                <ul key={adventures.id}>
                    <h2>{adventures.name}</h2>
                    {adventures.eventList.map(event => <ul key={event.id}><li>{event.title} {event.description} {event.krio} <button>Delete</button></li></ul>)}
                </ul>
                <EventForm adventureID={this.props.match.params.id}/>
            </div>
        )
    }
      
    
}

const mapStateToProps = (state) => {
    debugger
    return {avdentures: state.adventureReducer.avdentures,
    loading: state.adventureReducer.loading}
}
export default connect(mapStateToProps, {fetchAdventures})(Adventure);

//check to see if I recieve any data from state. this.props.avdentures << how to check

//map over this.props.avdentures give variable 

// take out event connection and use in show once user clicks on it.

