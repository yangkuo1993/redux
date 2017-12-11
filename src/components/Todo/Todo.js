import React, {Component} from 'react'
import PropTypes from 'prop-types'
export default class Todo extends Component{
    static propTypes = {
        title: PropTypes.string.isRequired,
        checked: PropTypes.bool.isRequired,
        changeCheck: PropTypes.func.isRequired,
        delete: PropTypes.func.isRequired
    };
    render(){
        return(
            <div>
                <input type="checkbox" onChange={this.props.changeCheck} checked={this.props.checked}/>
                <span style={{textDecoration: this.props.checked ? 'line-through' : 'none'}}>{this.props.title}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;<span onClick={this.props.delete}>删除</span>
            </div>
        )
    }
}