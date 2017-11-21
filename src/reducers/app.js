import {
    APP
} from '../constants/App'
const initialState = {
    // geos: null,
}

export default function app(state = initialState, action) {
    switch (action.type) {
        case APP:  
            return {
                ...state,
                // geos: map(action.payload),
            }
        default:
            return {...state}
    }
}