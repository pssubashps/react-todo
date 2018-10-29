
const initalState = {
    todos: [
        { title: 'PHP', completed: false },
        { title: 'Java', completed: true },
    ]
};
const reducer = (state = initalState, action) => {
    console.log(action.type);
    switch (action.type) {
        case 'ADD':
        console.log(action);
        return {
            ...state,
            todos: state.todos.concat({title:action.data,completed:false})
        };
       
        case 'COMPLETE':
           const newState = {
                ...state
            };

            newState.todos = newState.todos.map((e, index) => {
                e = { ...e, completed: true };
                return e;
            });
            console.log(newState);
            return newState;
        default:
            return state;
    }
    // return state;
}

export default reducer;