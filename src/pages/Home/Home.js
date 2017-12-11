import React, {Component} from 'react'
import AddButton from '../../components/AddButton/AddButton'
import store from '../../store/store'
import {AddCount, AddTodo, CompleteTodo, DeleteTodo, ClearCompletedTodo} from "../../actions/action";
import AddList from '../../components/AddList/AddList'
import Todo from '../../components/Todo/Todo'
import Footer from '../../components/Footer/Footer'
export default class Home extends Component{
    constructor(){
        super();
        this.state = {
            allCount: store.getState().addCount.allCount,
            todoList: store.getState().addTodo,
            choosen: 'ALL'
        };
        this.clickAdd = this.clickAdd.bind(this);
        this.saveTodo = this.saveTodo.bind(this);
        this.chooseHandle = this.chooseHandle.bind(this);
    }
    clickAdd(){
        store.dispatch(AddCount(1));
    }
    saveTodo (text){
        store.dispatch(AddTodo(text));
    }
    chooseHandle(e) {
        let chooseValue = e.target.innerHTML.toUpperCase();
        this.setState({
            choosen: chooseValue
        });
        if(chooseValue === 'ACTIVE'){
            this.setState({todoList: store.getState().addTodo.filter(data => data.completed === false)})
        } else if(chooseValue === 'COMPLETED'){
            this.setState({todoList: store.getState().addTodo.filter(data => data.completed === true)})
        } else this.setState({todoList: store.getState().addTodo})
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
                {this.state.todoList.map((data) => <Todo delete={(e) => store.dispatch(DeleteTodo(data.id))} title={data.text} key={data.id} checked={data.completed} changeCheck={(e) => store.dispatch(CompleteTodo(data.id))}></Todo>)}
                <Footer choose={(e) => this.chooseHandle(e)} deleteCompleted={e => store.dispatch(ClearCompletedTodo())} choosen={this.state.choosen}></Footer>
            </div>
        )
    }
}