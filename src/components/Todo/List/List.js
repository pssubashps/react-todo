import React from 'react';
import Aux from '../../../hoc/Aux';
const list = (props) => {
     let button = null;
     let title = '';
    if (props.completed) {
        title = <strike>{props.title}</strike>
        button =  <button className='badges' onClick={() => props.undoHandler(props.todoKey)}>Undo</button>;
    } else {
        title = <Aux>{props.title}</Aux>
        button =  <button className='badges btn-success' onClick={() => props.doneHandler(props.todoKey)}>Done</button>;
    }
    const editButton =<button className='badges btn-primary' onClick={() => props.editHandler(props.todoKey)}>Edit</button>;
      const deleteButton =<button className='badges btn-danger'  onClick={() => props.deleteHandler(props.todoKey)}>Delete</button>;
    return (
            <li className="list-group-item">
                {title}
               {button}
               {editButton}
               {deleteButton}
            </li>
    );
};

export default list;
