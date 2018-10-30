import * as ActionTypes from './action-types';
const initalState = {
    todos: [
        { title: 'What to do today', completed: false },
    ],
    editMode:false,
    editIndex:0
};
const reducer = (state = initalState, action) => {

    switch (action.type) {
        case ActionTypes.ADD:
            return {
                ...state,
                todos: state.todos.concat({title:action.data.title,completed:false})
            };
        case ActionTypes.UPDATE:
            const updatedState = {
                ...state,
                editMode: false,
                editIndex: 0
            };

            updatedState.todos = updatedState.todos.map((todoItem, index) => {
              if(index === action.data.todoId) {
                todoItem = { ...todoItem, title:action.data.title,completed: false };
              }
              return todoItem;
            });
            return updatedState;

        case ActionTypes.DELETE:
            const deleteState = {
                ...state
            };
            deleteState.todos = deleteState.todos.filter((todoItem, index) => {
              return index !== action.todoId;
            });
            return deleteState;

            case ActionTypes.EDIT:
            return {
                ...state,
                editMode: true,
                editIndex: action.todoId
            };
        case ActionTypes.COMPLETE:
            const newState = {
                 ...state
             };

             newState.todos = newState.todos.map((todoItem, index) => {
               if(index === action.todoId) {
                 todoItem = { ...todoItem, completed: true };
               }
               return todoItem;
             });
             return newState;
        case ActionTypes.UNDO:
             const undoState = {
                  ...state
              };
              undoState.todos = undoState.todos.map((todoItem, index) => {
                if(index === action.todoId) {
                  todoItem = { ...todoItem, completed: false };
                }
                return todoItem;
              });
              return undoState;
        default:
            return state;
    }
}

export default reducer;
