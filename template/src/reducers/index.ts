
import { combineReducers } from 'redux'

import product, { IProductState } from './product'

/**
 * root state.
 */
export interface IRootState {
    product: IProductState
};

/**
 * root reducer
 */

export default combineReducers({
    product
})