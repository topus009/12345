import { combineReducers } from 'redux'
import calendar from './calendar'
import app from './app'

export default combineReducers({
    calendar,
    app, 
})