import * as types from '../constans/ActionTypes'

export const AddCount = (count) => ({
    type: types.ADD_COUNT,
    count: count
});

export const AddTodo = (text) => {
    return{
        type: types.ADD_TODO,
        text: text
    }
};

export const CompleteTodo = id => ({
    type: types.COMPLETE_TODO, id
});

export const DeleteTodo = id => ({
    type: types.DELETE_TODO, id
});

export const ClearCompletedTodo = () => ({
    type: types.CLEAR_COMPLETED_TODO
});
// 请求
export const Request = bkdata => ({
    type: types.REQUEST_POSTS,
    bkdata
});
// 过期
export const Invalidate = bkdata => ({
    type: types.INVALIDATE_SUBREDDIT,
    bkdata
});
// 接收请求
export const Receive = bkdata => ({
    type: types.REQUEST_POSTS,
    bkdata,
    
});