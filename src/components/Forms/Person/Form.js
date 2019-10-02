import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../../Store/actions/index'

export class Form extends Component {
    state = {
        famId: this.props.famId,
        firstname: '',
        lastname: ''
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.addPerson(this.state.firstname, this.state.lastname, this.state.famId)
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input 
                        type="text"
                        name="firstname"
                        value={this.state.firstname}
                        placeholder="first name"
                        onChange={this.changeHandler}
                    />
                    <input 
                        type="text"
                        name="lastname"
                        value={this.state.lastname}
                        placeholder="last name"
                        onChange={this.changeHandler}
                    />
                    <button type="submit">+</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPerson: (firstname, lastname, famId) => dispatch(actions.addPerson(firstname, lastname, famId))
    }
}

export default connect(null, mapDispatchToProps)(Form)
