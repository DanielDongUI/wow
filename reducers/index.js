import { combineReducers } from 'redux';
import  eventList from './eventList';
import userList from './userList';

const rootReducer = combineReducers({
    eventList,userList
})

export default rootReducer