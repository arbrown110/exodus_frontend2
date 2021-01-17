import React, { Component } from 'react';
import { addAdventure } from '../../actions/adventuresActions';
import { withRouter } from "react-router";
import { connect } from 'react-redux'


const AdventureFormWithRouter = withRouter(AdventureForm)

class AdventureForm extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            image_url: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        thie.props.addAdventure(this.state);
        this.setState({
            name: "",
            image_url: ""
        })
    }

    render() {
        return(
            <form onSubmit={(e) => this.handleSubmit(e)}>
            <h2>Exodus : Sierra Leone</h2>
            
            <label>Topic's Name </label>
            <input name="name" required value={this.state.name} onChange={(e) => this.handleChange(e)}
                />
            

            
            <label>Image</label>
            <textarea name="image_url" required value={this.state.image_url} onChange={this.handleChange} />
            <button type="submit">Add Entry</button>
        </form>
        )
    }
}




export default connect(AdventureFormWithRouter, { addAdventure })(AdventureForm);