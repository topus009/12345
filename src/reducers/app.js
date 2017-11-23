import {
    GET_LIST_SUCCESS,
    SELECT_DAY,
} from '../constants/App'
const initialState = {
    tasks: {},
    dates: [],
    selectedDay: null,
}

export default function app(state = initialState, action) {
    const { payload } = action;    
    switch (action.type) {
        case GET_LIST_SUCCESS:  
            return {
                ...state,
                tasks: {...payload},
                dates: [Object.keys(payload)],
            }
        case SELECT_DAY:  
            return {
                ...state,
                selectedDay: payload,
            }
        default:
            return {...state}
    }
}