import React, {Component} from 'react'
import AddButton from '../../components/AddButton/AddButton'
import store from '../../store/store'
import {AddCount} from "../../actions/action";
export default class Home extends Component{
    constructor(){
        super();
        this.clickAdd = this.clickAdd.bind(this);
        this.state = {
            allCount: store.getState().addCount.allCount
        }
    }
    clickAdd(){
        store.dispatch(AddCount(1));
    }
    render(){
        store.subscribe(() =>{
            this.setState({
                allCount: store.getState().addCount.allCount
            })
        });
        return(
            <div>
                <AddButton addClick={this.clickAdd}></AddButton>
                <AddButton addClick={this.clickAdd}></AddButton>
                <AddButton addClick={this.clickAdd}></AddButton>
                <div>
                    <p style={{color: 'red'}}>{this.state.allCount}</p>
                </div>
            </div>
        )
    }
}