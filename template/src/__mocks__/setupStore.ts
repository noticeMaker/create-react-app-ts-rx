
import { applyMiddleware, createStore, compose } from 'redux'

import thunk from 'redux-thunk'

import { createEpicMiddleware } from 'redux-observable'

import reducers, { IRootState } from 'src/reducers'

import rootEpic from 'src/epics'

const epicMiddleware = createEpicMiddleware()

const middlewares = [
    thunk,
    epicMiddleware
]

export default function setupStore(initialState?: IRootState) {

    const enhancer = compose(
        applyMiddleware(...middlewares)
    )

    const store = createStore(reducers, initialState, enhancer)

    epicMiddleware.run(rootEpic);

    return store
}
