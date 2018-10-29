import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './List/List';
import Add from './Add/Add';
class Todo extends Component {
    todoItems;  
       
    render() {

        this.todoItems = this.props.todoList.map((todo, index) => {
            return <List key={index}  todoKey={index}  completed= {todo.completed} title={todo.title} 
            clicked = {this.props.onTodoCompetedHandler} />;
        });
    
        return (
            <section>
                <Add 
                changed={this.updateTodoChange} addNew={this.props.onAddNew }/>
                <ul>
                {this.todoItems}
                </ul>
                
            </section>
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
        onTodoCompetedHandler: (index) => dispatch({type:'COMPLETE',todoId:index}),
        onAddNew: (value) => dispatch({type:'ADD',data:value})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);