    import { 
    PROFILE_ERROR,
    GET_PROFILE,
    ADD_EVENT,
    CLEAR_PROFILE
} from '../actions/types'

const initialState = {
    profile: null,
    loading: true,
    error: {}
}

const profile = function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_PROFILE:
        case ADD_EVENT:
            return {
                ...state,
                profile: payload,
                loading: false
            }
        case PROFILE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        case CLEAR_PROFILE:
            return {
                ...state,
                profile: null,
                loading: false
            };
    
        
        default: 
            return state;
    }
}

export default profile;