import {
    TASKS
} from '../constants/Tasks'
const initialState = {
    // geos: null,
}

export default function tasks(state = initialState, action) {
    switch (action.type) {
        case TASKS:  
            return {
                ...state,
                // geos: map(action.payload),
            }
        default:
            return {...state}
    }
}