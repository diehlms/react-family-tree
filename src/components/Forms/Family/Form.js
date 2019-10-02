import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../../Store/actions/index'

export class Form extends Component {
    state = {
        name: ''
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.addFamily(this.state.name)
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
                        name="name"
                        value={this.state.name}
                        placeholder="add a family"
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
        addFamily: name => dispatch(actions.addFamily(name))
    }
}

export default connect(null, mapDispatchToProps)(Form)
