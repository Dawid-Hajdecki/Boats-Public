import { 
    SPEAKER_ERROR,
    GET_SPEAKERS,
} from '../actions/types'

const initialState = {
    speakers: [],
    loading: true,
    error: {}
}

const speakers = function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_SPEAKERS:
            return {
                ...state,
                speakers: payload,
                loading: false
            }
        case SPEAKER_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        
        default: 
            return state;
    }
}

export default speakers;