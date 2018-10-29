
import { Dispatch } from 'redux'
import { createAction, handleActions } from 'redux-actions'


// 必须 export default 函数名为 reducer() 的 reducer
// 必须 作为函数 export 它的 action creators
// 必须 把 action types 定义成形为 app/reducerName/ACTION_TYPE 的字符串
// 如果有外部的reducer需要监听这个action type，或者作为可重用的库发布时， 可以 用 UPPER_SNAKE_CASE 形式 export 它的 action types。


// Interface 
// export interface IIterface { }

// Actions

export const LOAD = 'app/widgets/LOAD'

export const CREATE = 'app/widgets/CREATE'

export const UPDATE = 'app/widgets/UPDATE';

// Action Creators
export const loadWidgets = createAction(LOAD)

export const createWidget = createAction(CREATE)

// Async Actions Creators
export const updateWidget = () => async (dispatch: Dispatch) => {
    try {
        // todo 
    } catch (e) {
        throw new Error(e)
    }
}

// Reducer initState

const initState = { 
    // some
}

// Reducer

export default handleActions({
    [LOAD]: (state, action) => {
        return Object.assign({}, state, action )
    }
}, initState)

