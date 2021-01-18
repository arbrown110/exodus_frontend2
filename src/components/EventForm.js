import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addEvent } from '../actions/EventsActions'

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
          [e.target.title]: e.target.value
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
          <div>
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <label >Add Event:</label>
              <input placeholder="Add a new entry title.." name="title" required value={this.state.title} onChange={(e) => this.handleChange(e)} />
              <textarea >Add Description:</textarea>
              <input placeholder="Describe what happened.." name="desciption" required value={this.state.description} onChange={(e) => this.handleChange(e)} />
              <textarea >Add Phrase:</textarea>
              <input placeholder="what should I say.." name="krio" required value={this.state.krio} onChange={(e) => this.handleChange(e)} />
              <br></br>
              <button type="submit">Add Event</button>
            
            </form>
          </div>
        )
    };
}

export default connect(null, {addEvent})(EventInput);