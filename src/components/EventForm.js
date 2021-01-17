import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addEvent } from '../../actions/eventsActions'
import {Form, Button} from 'react-bootstrap';
class EventInput extends Component {
    constructor() {
      super()
      this.state = {
        title: "",
        description: "",
        krio: ""
      }
    }

    handleChange = (e) => {
        this.setState({
          [e.target.title]: event.target.value
        })
    }

    handlesubmit = (e) => {
        e.preventDeafult();
        this.props.addEvent(this.state, this.props.adventure.id)

        this.setState({
            title: "",
            description: "",
            krio: "" 
        })
    }

    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <label >Add Event:</label>
              <input placeholder="Add a new entry title.." name="title" required value={this.state.title} onChange={(e) => this.handleChange(e)} />
              <label >Add Description:</label>
              <input placeholder="Describe what happened.." name="desciption" required value={this.state.description} onChange={(e) => this.handleChange(e)} />
              <label >Add Phrase:</label>
              <input placeholder="what should I say.." name="krio" required value={this.state.krio} onChange={(e) => this.handleChange(e)} />
            <button type="submit">Add Event</button>
            
          </form>
        )
    };
}

export default connect(null, {addEvent})(EventInput);