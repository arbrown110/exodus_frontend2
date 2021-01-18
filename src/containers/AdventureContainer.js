import React, { Component } from 'react'
import AdventureForm from '../components/AdventureForm'

import Adventure from '../components/Adventure'



class AdventureContainer extends Component {
    componentDidMount () {
        this.props.fetchAdventures();
    }
    render() {
        return(
            <div>
               <AdventureForm />
               <Adventure />
            </div>

        )
    }
}


export default AdventureContainer

