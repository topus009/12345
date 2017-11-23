import {
    GET_LIST_SUCCESS
} from '../constants/App'
const initialState = {
    tasks: {},
    dates: [],
}

export default function app(state = initialState, action) {
    switch (action.type) {
        case GET_LIST_SUCCESS:  
            const { payload } = action;
            return {
                ...state,
                tasks: {...payload},
                dates: [Object.keys(payload)],
            }
        default:
            return {...state}
    }
}


// [Object.entries(state.app.tasks)]