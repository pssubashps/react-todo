import React from 'react';
import Aux from '../../../hoc/Aux';
const list = (props) => {
    let button = null;
    let title = '';
    if (props.completed) {
        title = <strike>{props.title}</strike>
    } else {
        title = <Aux>{props.title}</Aux>
        button =  <button className='badges' onClick={() => props.clicked(props.todoKey)}>Done</button>;
    }

    return (
            <li className="list-group-item">
                {title}
               {button}
            </li>
    );
};

export default list;
