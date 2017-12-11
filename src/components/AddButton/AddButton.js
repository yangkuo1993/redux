import React, {Component} from 'react'
import PropTypes from 'prop-types'
export default class AddButton extends Component{
    constructor(){
        super();
        this.state = {
            count: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    static propTypes = {
        addClick: PropTypes.func.isRequired
    }
    handleClick (){
        this.setState({
            count: this.state.count + 1
        });
        this.props.addClick();
    }
    render(){
        return(
            <div>
                <button onClick={this.handleClick}>{this.state.count}</button>
            </div>
        )
    }
}