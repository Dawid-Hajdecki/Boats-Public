import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import schedule from './schedule';
import speakers from './speakers';


export default combineReducers({
    alert,
    auth,
    profile,
    schedule,
    speakers
});