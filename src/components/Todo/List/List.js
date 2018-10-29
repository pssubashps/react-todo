import React from 'react';
import Aux from '../../../hoc/Aux';
const list = (props) => {
    let button = null;
    let title = '';
    if (props.completed) {
        title = <strike>{props.title}</strike>
    } else {
        title = <Aux>{props.title}</Aux>
        button =  <button onClick={() => props.clicked(props.todoKey)}>Done</button>;

    }
    
 
   
    return (
        <Aux>
            <li>
                {title}
               {button}
            </li>
        </Aux>
    );
};

export default list;