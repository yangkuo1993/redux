import {combineReducers} from 'redux'
function addCount(state = {allCount: 0}, action) {
    switch (action.type) {
        case 'ADDCOUNT':
            return Object.assign({},state, {
                allCount: state.allCount + action.count
            });
        default:
            return state
    }
}
function addTodo(state = [{text: 'Use Redux', completed: true, id: 0}], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    completed: false,
                    text: action.text
                }
            ]
        case 'COMPLETE_TODO':
            return state.map((todo) =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            )
        case 'DELETE_TODO':
            return state.filter((todo) =>
                todo.id !== action.id
            )
        case 'CLEAR_COMPLETED_TODO':
            return state.filter(todo =>
                todo.completed === false
            )
        default:
            return state
    }
}
const App = combineReducers({
    addCount,addTodo
});
export default App