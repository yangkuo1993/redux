import React, {Component} from 'react'
import PropTypes from 'prop-types'
export default class Footer extends Component{
    static propTypes = {
        choose: PropTypes.func.isRequired,
        deleteCompleted: PropTypes.func.isRequired,
        choosen: PropTypes.string.isRequired
    }
    render(){
        return(
            <div>
                {(['All', 'Active', 'Completed']).map((data, index) =>
                    <button style={{color: this.props.choosen === data.toUpperCase() ? 'red' : '#000000'}} key={index} onClick={this.props.choose}>{data}</button>
                )}
                <button onClick={this.props.deleteCompleted}>DeleteAllCompleted</button>
            </div>
        )
    }
}