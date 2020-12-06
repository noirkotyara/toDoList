import style from './Tasks.module.css';
import React, { useEffect, useState } from 'react';

const Task = React.memo(props => {

    let [newTask, changeNewTask] = useState('');

    let [editMode, changeEditMode] = useState(false);
    let [TaskText, changeTaskText] = useState('');

    let deleteTask = (taskId) => {
        props.deleteTask(props.id, taskId);
    }

    let setTaskText = (text) => {
        changeTaskText(text);
    } 

    let setStatusModeTrue = (text) => {
        changeTaskText(text);
        changeEditMode(!editMode);
    }

    let setStatusModeFalse = (taskId) => {
        changeEditMode(!editMode);
        //Thunk
        props.updateTask(props.id, taskId, TaskText);
    }

    let changeOrderTasks = (taskId, putAfterItemId) => {
        props.reoderTask(props.id, taskId, putAfterItemId);
        // todolistId = props.id; taskId = task.id; putAfterItemId = array[index+-1/0].id
    }

    let taskArray = props.tasks.map((task, index, array) => {
        if (task.todoListId === props.id) {
            return <div key={task.id} className={style.taskItem}>
                <div>
                    {editMode 
                    ? <input autoFocus={true} onBlur={() => setStatusModeFalse(task.id)} onChange={(e) => setTaskText(e.currentTarget.value)} type="text" value={TaskText}/>
                    : <span onDoubleClick={() => setStatusModeTrue(task.title)}>{task.title}</span>
                    }
                    <span>
                        {index < array.length-1 && <input onClick={() => changeOrderTasks(array[index].id, array[index+1].id)} type="button" value='-'/> }
                        {index > 0 && <input onClick={() => changeOrderTasks(array[index-1].id, array[index].id)} type="button" value='+'/> }
                    </span>
                    <span onClick={() => deleteTask(task.id)} className={style.delete}>X</span>    
                </div>
               
            </div>
        }
    });

    let onTaskChangeText = (text) => {
        changeNewTask(text);
    }

    let addTask = () => {

        props.postTasks(props.id, newTask);
        changeNewTask('');
    }

    return (
        <div>
            <div>
                <textarea value={newTask} onChange={(e) => onTaskChangeText(e.currentTarget.value)} cols="30" />
                <input onClick={addTask} type="button" value="Add" />
            </div>
            <div>
                {taskArray}
            </div>


        </div>
    );
});
export default Task;