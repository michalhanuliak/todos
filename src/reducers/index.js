import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"

import tasks from './tasks'
import filterStatus from './filter'


const combinedReducers = combineReducers({
    tasks,
    filterStatus
})

const store = createStore(combinedReducers, applyMiddleware(thunk))
export default store