import React from 'react'
import EventContainer from '../containers/EventContainer'

const Adventure = (props) => {
    let adventure = props.adventures.filter(adv => adv.id == props.match.params.id)[0]

    return (
        <div>
            <h2>{adventure ? adventure.name : null}</h2>
            <br></br>
            {adventure ? adventure.image_url : null}

            <EventContainer adventure={adventure} />

        </div>
    )
}

export default Adventure