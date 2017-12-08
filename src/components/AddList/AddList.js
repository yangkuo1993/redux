import React,{Component} from 'react'
import PropTypes from 'prop-types'
export default class AddList extends Component{
    constructor(){
        super();
        this.state = {
            text: ''
        };
        this.keyHandle = this.keyHandle.bind(this);
        this.changeHandle = this.changeHandle.bind(this);
    }
    static propTypes = {
        save: PropTypes.func.isRequired
    };
    keyHandle (e) {
        if(e.which === 13) {
            this.setState({
                text: ''
            });
            this.props.save(this.state.text);
        }
    }
    changeHandle (e) {
        this.setState({
            text: e.target.value
        })
    }
    render(){
        return(
            <div>
                <input type="text" onKeyUp={this.keyHandle} value={this.state.text} onChange={this.changeHandle}/>
            </div>
        )
    }
}