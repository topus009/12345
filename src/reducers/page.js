import {
    GET_LIST_SUCCESS
} from '../constants/Page'
const initialState = {
    // geos: null,
}

export default function page(state = initialState, action) {
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