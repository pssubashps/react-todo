import React,{Component} from 'react';

class Add extends Component{

    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    onChangeHendler = (event) => {
        this.setState({value: event.target.value});
    }

    render(){
        return(
          <div class="form-inline">
            <div class="form-group">
               <label for="email">Todo :</label>
               <input  class="form-control" id="inputsm" type='text' name='todo' placeholder='Enter todo detaiils'
               onChange={this.onChangeHendler} />
            </div>
            <button  class="btn btn-primary" id="inputlg"  onClick={() =>this.props.addNew(this.state.value)}>Add</button>
          </div>

        );
    }
}

export default Add;
