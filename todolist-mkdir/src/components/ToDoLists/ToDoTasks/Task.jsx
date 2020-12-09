import style from './Tasks.module.scss';
import React, { useEffect, useState } from 'react';
import Description from './Description';

const Task = React.memo(props => {

    let [newTask, changeNewTask] = useState('');

    let [editMode, changeEditMode] = useState(false);
    let [TaskText, changeTaskText] = useState('');
    let [choosedTask, changeChoosedTask] = useState('');
    

    let deleteTask = (taskId) => {
        props.deleteTask(props.id, taskId);
    }

    let setTaskText = (text) => {
        changeTaskText(text);
    } 

    let setStatusModeTrue = (text, taskId) => {
        changeChoosedTask(taskId)
        changeTaskText(text);
        changeEditMode(!editMode);
    }

    let setStatusModeFalse = (task) => {
        changeEditMode(!editMode);
        props.updateTask(props.id, task.id, {...task, title:TaskText});
    }

    let changeOrderTasks = (taskId, putAfterItemId) => {
        props.reoderTask(props.id, taskId, putAfterItemId);
    }

    let changeCheckBox = (bool, task) => {
        let intBool = Number(bool);
        props.updateTask(props.id, task.id, {...task, status: intBool });
    }

    let taskArray = props.tasks.map((task, index, array) => {
        if (task.todoListId === props.id) {
            let date = new Date(task.addedDate);
            return <div key={task.id} className={style.taskItem}>
                <div>
                    {(editMode && choosedTask === task.id)
                    ? <input autoFocus={true} onBlur={() => setStatusModeFalse(task)} onChange={(e) => setTaskText(e.currentTarget.value)} type="text" value={TaskText}/>
                    : <span onDoubleClick={() => setStatusModeTrue(task.title, task.id)}>{task.title}</span>
                    }
                     <span onClick={() => deleteTask(task.id)} className={style.delete}>X</span>  
                     <input checked={task.status} onChange={(e) => changeCheckBox(e.currentTarget.checked,task)} className={style.complete} type='checkbox'></input>
                <div>
                    <Description 
                                task={task}
                                taskId = {task.id}
                                updateTask={props.updateTask}
                                id={props.id}/>
                </div>
                <div className={style.date}>{date.toDateString() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()}</div>
                    <div>
                        {index < array.length-1 && <input onClick={() => changeOrderTasks(array[index].id, array[index+1].id)} type="button" value='-'/> }
                        {index > 0 && <input onClick={() => changeOrderTasks(array[index-1].id, array[index].id)} type="button" value='+'/> }
                    </div> 
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