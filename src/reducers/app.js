import {
    GET_LIST_SUCCESS,
    SELECT_DAY,
    SAVE,
    DELETE,
} from '../constants/App'
const initialState = {
    tasks: {},
    dates: [],
    selectedDay: null,
    selectedFormattedDay: null,
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
                selectedFormattedDay: payload ? payload.toLocaleDateString('ru').split('.').reverse().join('.') : null,
            }
        case SAVE:
            let tasksSave = state.tasks;    
            if (!tasksSave[payload.day]) {
                tasksSave = {
                    ...tasksSave, 
                    [payload.day] : [payload.value],
                }
            }
            else {
                tasksSave[payload.day] = [...tasksSave[payload.day], payload.value];
            }
            localStorage.setItem('LOCAL_LIST', JSON.stringify(tasksSave));
            return {
                ...state,
                tasks: tasksSave,
            }
        case DELETE:
            let tasksDelete = state.tasks;
            tasksDelete[payload.day].splice(payload.id, 1);
            if (!tasksDelete[payload.day].length) delete tasksDelete[payload.day];
            localStorage.setItem('LOCAL_LIST', JSON.stringify(tasksDelete))
            return {
                ...state,
                tasks: tasksDelete,
            }
        default:
            return {...state}
    }
}
