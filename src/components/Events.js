import React from 'react'
import { connect } from 'react-redux'
import { deleteEvent } from '../actions/EventsActions'

const EventList = (props) => {
    const handleClick = (event) => {
    props.deleteEvent(event.id, event.adventure_id)
    }   

    return (
        <div>
            {props.events && props.events.map(event => 
                <div  key={event.id} id={event.id}>
                    <h3 >{event.title}</h3>
                    <li>Description: {event.description}</li>
                    <li> I can say: {event.krio}</li>
                    <br></br>
                    <button onClick={()=> handleClick(event)}>Delete</button>
                </div>
            
            )}
        </div> 
    )

}

export default connect(null, { deleteEvent})(EventList)