import { combineReducers } from 'redux';
import  eventList from './eventList';
import userList from './userList';
import statusList from './statusList'


const rootReducer = combineReducers({
    eventList,userList, statusList
})

export default rootReducer