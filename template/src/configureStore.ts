
import { applyMiddleware, createStore, compose } from 'redux';

import { createEpicMiddleware } from 'redux-observable'

import thunk from 'redux-thunk'

import reducers, { IRootState } from 'src/reducers';

import rootEpic from 'src/epics'

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
    }
}

const composeEnhancers = (
    window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose


const epicMiddleware = createEpicMiddleware()

const middlewares = [
    thunk,
    epicMiddleware
]

function configureStore(initialState?: IRootState) {

    const enhancer = composeEnhancers(
        applyMiddleware(...middlewares)
    )

    const store = createStore(
        reducers,
        initialState,
        enhancer
    );

    epicMiddleware.run(rootEpic);

    if ((module as any).hot) {
        (module as any).hot.accept("./reducers", () => {
            const nextRootReducer = require("./reducers/index");
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}

export default configureStore()

