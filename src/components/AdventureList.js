import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteAdventure, fetchAdventures} from '../actions/adventureActions'


const AdventureList = (props) => {
    const handleClick = (adventure) => {
        props.deleteAdventure(adventure.id);
    }
    return (
        <div>
            {props.adventures.map((adventure) =>
                <ul key={adventure.id}>
                    <Link to={`/adventures/${adventure.id}`}> {adventure.name}
                    <br></br>
                    {adventure.image_url}
                    </Link>
                    <button onClick={() => handleClick(adventure)}> Delete </button>
                </ul>)}
        </div>
    );

}

export default connect(null, {fetchAdventures, deleteAdventure})(AdventureList)