import { 
    TASKS,
} from '../constants/Tasks';
import { preloadList } from '../helpers/preloadData';

export function preload_List () {
    return (dispatch) => {
        preloadList().then(response => {
            const LOCAL_STORAGE = localStorage.getItem('LOCAL_LIST') ? 
            JSON.parse(localStorage.getItem('LOCAL_LIST')) : null

            dispatch({
                type: TASKS,
                payload: LOCAL_STORAGE !== null ? LOCAL_STORAGE : response
            });
        }, error => console.warn(`Rejected: ${error}`))
    }
}