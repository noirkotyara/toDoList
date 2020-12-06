import { tasksAPI, toDoAPI } from "../api/api";

const GET_TASKS = 'GET-TASKS';
const POST_TASK = 'POST-TASK';
const DEL_TASK = 'DEL_TASK';
const UPDATE_TASK = 'UPDATE-TASK';
const REORDER_TASK = 'REORDER-TASK';


const initial = {
    tasks: [],
    default: {
        description: 'no desc',
        completed: false,
        status: 0,
        priority: 1,
        startDate: '2020',
        deadline: 'today'
    }
}

const toDoTasksPage = (state = initial, action) => {

    switch (action.type) {
        case GET_TASKS: {
            return {
                ...state,
                tasks: action.tasks
            }
        }
        case POST_TASK: {
            return {
                ...state,
                tasks: [action.taskItem, ...state.tasks]
            }
        }
        case DEL_TASK: {
            return {
                ...state,
                tasks: state.tasks.filter(elem => elem.id !== action.taskId)
            }
        }
        case UPDATE_TASK: {
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if ( task.id === action.taskId ){
                        return action.item;                        
                    }
                    else return task;
                } )
            }
        }
        case REORDER_TASK: {
            let a, indexs;
            let array = state.tasks;

            array.forEach((elem, index) => {
                if (elem.id === action.taskId) {
                    indexs = index;
                }
            })
            
            a = array[indexs];
            array[indexs] = array[indexs + 1];
            array[indexs + 1] = a;            
            return {
                ...state,
                tasks: array.map(item => {return item})
            }
        }
        default: {
            return state;
        }
    }
}

const getTasks = (tasks) => ({ type: GET_TASKS, tasks });
const postTasks = (taskItem) => ({ type: POST_TASK, taskItem });
const deleteTask = (taskId) => ({ type: DEL_TASK, taskId });
const updateTask = (taskId, item) => ({ type: UPDATE_TASK, taskId, item})
const reorderTask = (taskId) => ({type: REORDER_TASK ,taskId })

export const getTasksThunk = (todolistId) => async (dispatch) => {
    let response = await tasksAPI.getTasks(todolistId);
    dispatch(getTasks(response.items));
}

export const postTasksThunk = (todolistId, title) => async (dispatch) => {
    let response = await tasksAPI.postTasks(todolistId, title);
    (response.resultCode === 0) && dispatch(postTasks(response.data.item));
}

export const deleteTaskThunk = (todolistId, taskId) => async (dispatch) => {
    let response = await tasksAPI.deleteTasks(todolistId, taskId);
    (response.resultCode === 0) && dispatch(deleteTask(taskId));
}

export const updateTaskThunk =
    (todolistId, taskId, title,
        description = 'no desc', completed = false,
        status = 0, priority = 1, startDate = '2020-12-06T13:06:41.327',
        deadline = '2020-12-06T13:06:41.327') => async (dispatch) => {
            let updatedTaskObject = { title, description, completed, status, priority, startDate, deadline };
            let response = await tasksAPI.updateTasks(todolistId, taskId, updatedTaskObject);
            (response.resultCode === 0) && dispatch(updateTask(taskId, response.data.item))
}

export const reoderTaskThunk = (todolistId, taskId, putAfterItemId) => async (dispatch) => {
    let response = await tasksAPI.reorderTasks(todolistId, taskId, putAfterItemId);
    (response.resultCode === 0) && dispatch(reorderTask(taskId));
}

export default toDoTasksPage;

