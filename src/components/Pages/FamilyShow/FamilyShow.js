import React from 'react'
import { connect } from 'react-redux'
import PersonForm from '../../Forms/Person/Form'

function FamilyShow(props) {
    let family = props.families.families.find((indFam) => {
        return indFam.id.toString() === props.match.params.id
    })

    let people = family.people.map((indPerson) => {
        return <li key={indPerson.id}>{indPerson.firstname} {indPerson.lastname}</li>
    })
    return (
        <div>
            <h1>{family.name}</h1>
            <PersonForm
                famId={props.match.params.id}
            />
            <ul>{people}</ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        families: state.families
    }
}

export default connect(mapStateToProps, null)(FamilyShow)

