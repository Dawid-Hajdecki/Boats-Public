import { 
    GET_SCHEDULES,
    ERROR_SCHEDULE,
} from '../actions/types'

const initialState = {
    schedules: [],
    loading: true,
    error: {}
}

const schedule = function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_SCHEDULES:
            return {
                ...state,
                schedules: payload,
                loading: false
            }
        case ERROR_SCHEDULE:
            return {
                ...state,
                error: payload,
                loading: false
            };  
        default: 
            return state;
    }
}

export default schedule;