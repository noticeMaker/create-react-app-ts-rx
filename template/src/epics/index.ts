

import { Action } from 'redux'
import { combineEpics } from "redux-observable"

import productEpic from "./productEpic"

const epics = combineEpics<Action>(
    productEpic
)

export default epics