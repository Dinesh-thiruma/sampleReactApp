import React from 'react';
import axios from 'axios';

class Textbox extends React.Component {
    state = {
        task: ""
    }

    onSubmit = () => {
        // console.log(this.state.task);

        axios.post('http://localhost:4000/', {
            task: this.state.task
        })
    }

    render() {
        return (
            <div className = "entry">
                <input
                    type = "text"
                    placeholder = "Input"
                    value = {this.state.task}
                    onChange = {e => this.setState({
                        task: e.target.value
                    })}
                />
                <button 
                    className = "inputButton"
                    type = "submit" 
                    onClick = {() => this.onSubmit()}
                >
                    <i> Submit</i>
                </button>
            </div>
        );
    }
}
export default Textbox;