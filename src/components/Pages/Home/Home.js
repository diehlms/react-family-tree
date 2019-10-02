import React, { Component } from 'react'
import FamilyForm from '../../Forms/Family/Form'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

export class Home extends Component {
    
    render() {
        let families = this.props.families.families.map((indFam) => {
            return (
                <li key={indFam.id}><Link to={`/families/${indFam.id}`}>{indFam.name}</Link></li>
            )
        })

        return (
            <div>
                <h1>Home Page</h1>
                <FamilyForm />
                <ul>{families}</ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        families: state.families
    }
}

export default connect(mapStateToProps, null)(Home)


