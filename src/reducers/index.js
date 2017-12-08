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
const App = combineReducers({
    addCount
})
export default App