import * as ActionTypes from './action-types';

export const addTodo = (title) => {
  return {
    type:ActionTypes.ADD,
    data:{title:title}
  }
}

export const updateTodo = (payload) => {
  return {
    type:ActionTypes.UPDATE,
    data:payload
  }
}


export const deleteTodo = (index) => {
  return {
    type:ActionTypes.DELETE,
    todoId:index
  }
}

export const getTodo = (index) => {
  return {
    type:ActionTypes.EDIT,
    todoId:index
  }
}

export const undoTodo = (index) => {
  return {
    type:ActionTypes.UNDO,
    todoId:index
  }
}

export const completeTodo = (index) => {
  return {
    type:ActionTypes.COMPLETE,
    todoId:index
  }
}
