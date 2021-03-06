import * as ActionTypes from './action-types';

const initalState = {
    todos: [
        { title: 'What to do today', completed: false },
    ],
    editMode:false,
    editIndex:0
};

const updateTodostatus = (state,todoId,status) => {
  const newState = {
       ...state
   };

   newState.todos = newState.todos.map((todoItem, index) => {
     if(index === todoId) {
       todoItem = { ...todoItem, completed: status };
     }
     return todoItem;
   });
   return newState;
}

const deleteTodo = (state,todoId) => {
  const deleteState = {
      ...state
  };
  deleteState.todos = deleteState.todos.filter((todoItem, index) => {
    return index !== todoId;
  });
  return deleteState;
}

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
              return deleteTodo(state,action.todoId);
        case ActionTypes.COMPLETE:
             return updateTodostatus(state,action.todoId,true);
        case ActionTypes.UNDO:
              return updateTodostatus(state,action.todoId,false);
        case ActionTypes.EDIT:
              return {
                  ...state,
                  editMode: true,
                  editIndex: action.todoId
              };
        default:
            return state;
    }
}

export default reducer;
