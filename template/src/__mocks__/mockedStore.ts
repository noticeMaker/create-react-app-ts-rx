
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import { createEpicMiddleware } from 'redux-observable'

import rootEpic from 'src/epics'

const epicMiddleware = createEpicMiddleware()

const middleware = [
    thunk,
    epicMiddleware
]

export default function setupStore(initialState: any) {
    const store = configureMockStore(middleware)

    epicMiddleware.run(rootEpic);

    return store
}

