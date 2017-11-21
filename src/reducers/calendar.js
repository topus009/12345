import {
    GET_LIST_SUCCESS
} from '../constants/Calendar'
const initialState = {
    // geos: null,
}

export default function calendar(state = initialState, action) {
    switch (action.type) {
        case GET_LIST_SUCCESS:  
            return {
                ...state,
                // geos: map(action.payload),
            }
        default:
            return {...state}
    }
}