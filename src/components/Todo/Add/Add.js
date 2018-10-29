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
            <div>
                <input type='text' name='todo' placeholder='Enter toto detaiils'
                onChange={this.onChangeHendler}
                />
                <button onClick={() =>this.props.addNew(this.state.value)}>Add</button>
            </div>
        );
    }
    
}

export default Add;