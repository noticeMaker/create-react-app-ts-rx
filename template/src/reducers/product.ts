
import { Dispatch } from 'redux'
import { createAction, handleActions } from 'redux-actions'
import token from 'src/helpers/tokenService'

export interface IProduct {
    id: number
    title: string
    price: number
    inventory: number
}

export interface IProductState {
    product: IProduct[]
}

export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'

export const getProduct = createAction(GET_ALL_PRODUCTS)

export const receiveProduct = createAction(RECEIVE_PRODUCTS)

export const fecthFreqList = () => async (dispatch: Dispatch) => {
    try {
        token.set('22')
        const source = [
            { "id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2 },
        ]
        
        dispatch(receiveProduct(source))
    } catch (e) {
        throw new Error(e)
    }
}
const initState = { product: [] }

export default handleActions<IProductState>({
    [RECEIVE_PRODUCTS]: (state, action) => {
        return Object.assign({}, state, { product: action.payload})
    }
}, initState)