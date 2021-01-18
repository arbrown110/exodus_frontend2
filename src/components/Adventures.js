import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {  fetchAdventures } from '../actions/AdventuresActions'


class AdventureList extends React.Component {
    componentDidMount() {
        this.props.fetchadventureList()
    }
    render() {  
        return (
            <div>
                {this.props.adventures.length > 0 && this.props.adventures.map(adventure =>
                                        
                    <ul key={adventure.id}>
                        <li>
                            <Link key={adventure.id} to={`/adventure/${adventure.id}`}> <b>{adventure.attributes.name}</b><br/></Link><i>
                             Image:{adventure.attributes.image_url}</i> 
                              <button>Delete</button>
                        </li> 
                    </ul>
                )}
            </div>  
           
            
        ) 
    } 
}     
const mapStateToProps = ({adventureList}) => {  
    
    return {adventureList: adventureList.adventureList} 
}

export default connect(mapStateToProps, { fetchAdventures })(AdventureList)