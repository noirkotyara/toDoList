import { toDoAPI } from "../api/api";

const SET_LISTS = 'SET-LISTS';
const SET_TASKS = 'SET-TASKS';
const CREATE_LIST = 'CREATE-LIST';
const DELETE_LIST = 'DELETE-LIST';
const RENAME_LIST = 'RENAME-LIST';
const IS_FETCH = 'IS-FETCH';
const CHANGE_ORD = 'CHANGE-ORD';
const GET_TASKS = 'GET-TASKS';

const initial = {
    lists: [
        {
            "id": "9f27f97b-bc63-4114-9baa-c91facbd4ffb",
            "title": "what todo",
            "addedDate": "2019-07-30T12:24:15.063",
            "order": 0
        }
    ],
    tasks: [],
    isFetching: false
}

const toDoPage = (state = initial, action) => {

    switch (action.type) {
        case SET_LISTS: {

            return {
                ...state,
                lists: action.lists
            }
        }
        case CREATE_LIST: {
            return {
                ...state,
                lists: [action.list, ...state.lists]
            }
        }
        case DELETE_LIST: {
            return {
                ...state,
                lists: state.lists.filter(list => list.id !== action.todolistId)
            }
        }
        case RENAME_LIST: {
            return {
                ...state,
                lists: state.lists.map(list => { if (list.id === action.todolistId) { return { ...list, title: action.title } } else return list })
            }
        }
        case IS_FETCH: {
            return {
                ...state,
                isFetching: action.bool
            }
        }
        case CHANGE_ORD: {
            let a, indexs;
            let array = state.lists;

            array.forEach((elem, index) => {
                if (elem.id === action.todolistId) {
                    indexs = index;
                }
            })
            
            a = array[indexs];
            array[indexs] = array[indexs + 1];
            array[indexs + 1] = a;            
            return {
                ...state,
                lists: array.map(item => {return item})
            }
        }
        default: {
            return state;
        }
    }
}

const setLists = (lists) => ({ type: SET_LISTS, lists });
const setTasks = (tasks) => ({ type: SET_TASKS, tasks });
const createList = (list) => ({ type: CREATE_LIST, list });
const deleteList = (todolistId) => ({ type: DELETE_LIST, todolistId });
const renameTitle = (todolistId, title) => ({ type: RENAME_LIST, todolistId, title });
const isFetching = (bool) => ({ type: IS_FETCH, bool });
const changeOrder = (todolistId, putAfterItemId, bool) => ({ type: CHANGE_ORD, todolistId, putAfterItemId, bool })


export const getLists = () => async (dispatch) => {
    dispatch(isFetching(true));
    let response = await toDoAPI.getToDoLists();
    dispatch(isFetching(false));
    (response.length !== 0) && dispatch(setLists(response));
}

export const postList = (title) => async (dispatch) => {
    let response = await toDoAPI.postToDoLists(title);
    (response.resultCode === 0) && dispatch(createList(response.data.item));
}

export const deleteListThunk = (todolistId) => async (dispatch) => {
    let response = await toDoAPI.deleteToDoList(todolistId);
    (response.resultCode === 0) && dispatch(deleteList(todolistId));
}


export const renameTitleThunk = (todolistId, title) => async (dispatch) => {
    let response = await toDoAPI.renameToDoList(todolistId, title);
    (response.resultCode === 0) && dispatch(renameTitle(todolistId, title))
}

export const changeOrderThunk = (todolistId, putAfterItemId, bool) => async (dispatch) => {
    let response = await toDoAPI.reorderToDoList(todolistId, putAfterItemId);
    // (response.resultCode === 0) && dispatch(getLists());
    (response.resultCode === 0) && dispatch(changeOrder(todolistId, putAfterItemId, bool));
}



export default toDoPage;