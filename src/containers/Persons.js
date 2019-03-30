import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import { connect } from 'react-redux'

class Persons extends Component {
    state = {
        persons: []
    }

    personAddedHandler = () => {

        this.props.addPerson()
    }

    personDeletedHandler = (personId) => {
        this.setState((prevState) => {
            return { persons: prevState.persons.filter(person => person.id !== personId) }
        });
    }

    render() {
        return (
            <div>
                <AddPerson personAdded={this.personAddedHandler} />
                {this.props.persons.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.personDeletedHandler(person.id)} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        persons: state.persons
    }

}

const mapPropsToState = (dispatch) => {

    return {
        addPerson: () => dispatch({
            type: 'ADD',
        
        })
    }

}

export default connect(mapStateToProps, mapPropsToState)(Persons);