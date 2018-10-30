import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './List/List';
import Add from './Add/Add';
import * as ActionTypes from '../../store/action-types';

class Todo extends Component {

    constructor (props) {
      super(props);
      const {todoList} = {...this.props};
      this.state = {
        todoList: todoList,
        mode:'filter'
      }
    }

    componentWillReceiveProps(props) {
        const {todoList} = {...props};
      this.setState({
        todoList: todoList,
        mode:'filter'
      });
    }

   toggleItems = () => {
     const filterTodo = this.state.todoList.filter((todo) => {
       return todo.completed === true;
     });
     if(this.state.mode === 'all') {
        const {todoList} = {...this.props};
        this.setState({todoList:todoList,mode:'filter'});
     }else{
        this.setState({todoList:filterTodo,mode:'all'});
     }

    }
    render() {
        const todoItems = this.state.todoList.map((todo, index) => {
            return <List key={index}  todoKey={index}  completed= {todo.completed} title={todo.title}
            doneHandler = {this.props.doneHandler}
            undoHandler = {this.props.undoHandler}
            editHandler = {this.props.editHandler}
            deleteHandler = {this.props.deleteHandler}
             />;
        });

        return (
            <div class="container">
                <Add
                changed={this.updateTodoChange} addNew={ this.props.onAddNew }/>
                <br/><br/>
                <button onClick={this.toggleItems}>{(this.state.mode === 'filter')?'Show Completed':'Show All'}</button>
                <ul className="list-group">
                {todoItems}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        todoList: state.todos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        doneHandler: (index) => dispatch({type:ActionTypes.COMPLETE,todoId:index}),
        undoHandler: (index) => dispatch({type:ActionTypes.UNDO,todoId:index}),
        editHandler: (index) => dispatch({type:ActionTypes.EDIT,todoId:index}),
        deleteHandler: (index) => dispatch({type:ActionTypes.DELETE,todoId:index}),
        onAddNew: (value) => dispatch({type:ActionTypes.ADD,data:value})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
