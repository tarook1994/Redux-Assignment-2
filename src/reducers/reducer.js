const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    if (action.type === 'ADD') {
       const  newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor(Math.random() * 40)
        }
        return {
            ...state,
            persons: state.persons.concat(newPerson)
        }
    }
    return state
}

export default reducer;