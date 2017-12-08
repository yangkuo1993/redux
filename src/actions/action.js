import * as types from '../constans/ActionTypes'

function AddCount(count) {
    return{
        type: types.ADD_COUNT,
        count: count
    }
}
export {AddCount}