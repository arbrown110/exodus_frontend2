import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Route, Switch} from "react-router-dom"

import {fetchAdventures, deleteAdventure} from '../actions/AdventuresActions'
import AdventureForm from '../components/adventures/AdventureForm'
import AdventureList from '../components/AdventuresList'
import Adventure from '../components/Adventure'
import About from '../components/About'
import Home from  '../components/Home'
import Links from '../components/Links'
import Contacts from '../components/Contacts'


class AdventureContainer extends Component {
    componentDidMount () {
        this.props.fetchAdventures();
    }
    render() {
        return(
            <div>
                <Switch>
                    <Route path='/' component={Home} />
                    <Route path='/avdentures/new' component={AdventureForm}/>
                    <Route path='/adventures/:id' render={(routerProps) => <Adventure {...routerProps} adventures={this.props.adventures} /> } />
                    <Route path='/adventures' render={(routerProps) => {return this.props.adventures && this.props.adventures.length ? <AdventureList {...routerProps} adventures={this.props.adventures} deleteAdventure={this.props.deleteAdventure} /> <AdventureForm {...routerProps} addAdventure ={this.props.addAdventure}/>}}
                    <Route path='/About' component={About} />
                    <Route path='/Contats' component={Contacts} />
                    <Route path='/Links' component={Links} />
                    
                </Switch>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        adventures: state.adventures
    };
};

export default connect(mapStateToProps, { fetchAdventures, deleteAdventure })(AdventureContainer);


