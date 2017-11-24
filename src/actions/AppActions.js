import { 
    GET_LIST_SUCCESS,
    SELECT_DAY,
    SAVE,
    DELETE,
} from '../constants/App';
import { preloadList } from '../helpers/preloadData';

export function preload_List() {
    return dispatch => {
        preloadList().then(response => {
            const LOCAL_STORAGE = localStorage.getItem('LOCAL_LIST') ? 
            JSON.parse(localStorage.getItem('LOCAL_LIST')) : null
            dispatch({
                type: GET_LIST_SUCCESS,
                payload: LOCAL_STORAGE !== null ? LOCAL_STORAGE : response
            });
        }, error => console.warn(`Rejected: ${error}`))
    }
}

export function selectDay(day) {
    return dispatch => {
            dispatch({
                type: SELECT_DAY,
                payload: day,
            });
    }
}

export function saveTask(day, value) {
    return dispatch => {
            dispatch({
                type: SAVE,
                payload: {
                    day: day,                    
                    value: value,
                },
            });
    }
}

export function deleteTask(day, id) {
    return dispatch => {
            dispatch({
                type: DELETE,
                payload: {
                    day: day,
                    id: id,
                },
            });
    }
}