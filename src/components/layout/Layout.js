import React from 'react';
import Aux from '../../hoc/Aux';
import Header from '../header/Header';
import Todo from '../Todo/Todo';

const layout = (props) => {
    return (
        <Aux>
           <Header></Header>
           <Todo></Todo>
        </Aux>
    );
}

export default layout;