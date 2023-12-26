import React, {Component} from 'react';

class AddPlayerForm extends Component {

state = {
    value:''
};

handleValueChange = (e) =>{
    this.setState({ value: e.target.value})
}


handleSubmit = (e) =>{
    e.preventDefault();   // not to reload page when add new item
    this.props.addPlayer(this.state.value)
    e.currentTarget.reset()
}

    render(){ 
        console.log(this.state.value)
        return(
<form onSubmit={this.handleSubmit}>
    <input type="text" placeholder="Enter Player's Name" 
        value={this.state.value}
        onChange={this.handleValueChange}
    />
    <input type="submit" value="Add Player" />
</form>
        );
    }
}




export default AddPlayerForm