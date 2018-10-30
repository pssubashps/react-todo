import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as ActionTypes from '../../../store/action-types';

class Add extends Component{

    constructor(props) {
        super(props);
        this.state = {title: ''};
    }

    handleSubmit = (event) => {
      const {editMode,editIndex} = { ...this.props.state};
      event.preventDefault();
      console.log()
      console.log('The value is: ' + this.state.title);
      if(editMode){
          this.props.updateTodo({title:this.state.title,todoId:editIndex});
      }else{
          this.props.submitTodo(this.state.title);
      }

      this.setState({title: ''})

    }

    componentWillReceiveProps (next) {
      const {editMode,editIndex,todos} = { ...next.state};
      if(editMode) {
        const title = todos[editIndex].title;
        this.setState({title: title});
      }
}
    handleChange = (event) => {
      this.setState({title: event.target.value});
    }

    render(){
       const {editMode} = { ...this.props.state};
        return(
          <form onSubmit={this.handleSubmit} className="form-inline">
            <div className="form-group">
               <label htmlFor="email">Todo :</label>
               <input  className="form-control" id="inputsm" type='text' name='todo' placeholder='Enter todo detaiils'
               onChange={this.handleChange} value={this.state.title}/>
            </div>
            <button  type='submit' className="btn btn-primary" id="inputlg"  >{(editMode)?'Update':'Add'}</button>
          </form>

        );
    }
}

const mapStateToProps = state => {
    return {
        state: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitTodo: (title) => dispatch({type:ActionTypes.ADD,data:{title:title}}),
        updateTodo: (payload) => dispatch({type:ActionTypes.UPDATE,data:payload}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add);
