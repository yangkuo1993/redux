import React, {Component} from 'react'
import PropTypes from 'prop-types'
export default class Todo extends Component{
    static propTypes = {
        title: PropTypes.string.isRequired,
        checked: PropTypes.bool.isRequired,
        changeCheck: PropTypes.func.isRequired
    };
    render(){
        return(
            <div>
                <input type="checkbox" onChange={this.props.changeCheck} checked={this.props.checked}/>
                <span>{this.props.title}</span>
            </div>
        )
    }
}