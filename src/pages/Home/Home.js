import React, {Component} from 'react'
import AddButton from '../../components/AddButton/AddButton'
import store from '../../store/store'
import {AddCount, AddTodo, CompleteTodo} from "../../actions/action";
import AddList from '../../components/AddList/AddList'
import Todo from '../../components/Todo/Todo'
export default class Home extends Component{
    constructor(){
        super();
        this.state = {
            allCount: store.getState().addCount.allCount,
            todoList: store.getState().addTodo
        };
        this.clickAdd = this.clickAdd.bind(this);
        this.saveTodo = this.saveTodo.bind(this);
    }
    clickAdd(){
        store.dispatch(AddCount(1));
    }
    saveTodo (text){
        store.dispatch(AddTodo(text));
    }
    render(){
        store.subscribe(() =>{
            this.setState({
                allCount: store.getState().addCount.allCount,
                todoList: store.getState().addTodo
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
                <AddList save={this.saveTodo}></AddList>
                {this.state.todoList.map((data) => <Todo title={data.text} key={data.id} checked={data.completed} changeCheck={(e) => store.dispatch(CompleteTodo(data.id))}></Todo>)}
            </div>
        )
    }
}