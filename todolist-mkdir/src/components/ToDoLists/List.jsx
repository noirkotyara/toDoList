import style from './Lists.module.css';
import React, { useEffect, useState } from 'react';
import Tasks from './ToDoTasks/Tasks';


const List = (props) => {

    let [editMode, changeEditMode] = useState(false);
    let [choosedTitle, changeTitle] = useState(1);
    let [newTitleText, changeNewTitleText] = useState('');

    let deleteList = (todolistId) => {
        props.deleteList(todolistId);
    }
    let updateTitle = () => {
        props.renameTitle(choosedTitle, newTitleText);
        changeEditMode(false);
        changeNewTitleText('');
    }
    let activateEditMode = (text, id) => {
        changeTitle(id);
        changeNewTitleText(text);
        changeEditMode(true);
        
    }
    
       let changeOrder = (todolistId, putAfterItemId, bool) => {
        props.changeOrder(todolistId, putAfterItemId, bool);
    }
    
    let listsArray = props.lists.map((list, index, array) => {
        let date = new Date(list.addedDate);
        return (<div key={list.id} className={style.listUI}>
            <div className={style.title}>

                <span>
                   {(editMode && list.id === choosedTitle)
                   ? <input onBlur={updateTitle} autoFocus={true} onChange={(e) => changeNewTitleText(e.currentTarget.value)} value={newTitleText}></input>
                   : <span onDoubleClick={() => activateEditMode(list.title, list.id)}>{list.title}</span>
                    }
                </span> 
                <span onClick={() => deleteList(list.id)} className={style.delTitle}>
                    X
                </span>
            </div>
            <div className={style.tasks}>
                <div>
                    <Tasks postTasks={props.postTasks}
                    deleteTask = {props.deleteTask} 
                    getTasks={props.getTasks} 
                    id={list.id}
                    reoderTask = {props.reoderTask}
                    updateTask = {props.updateTask}
                    tasks={props.tasks}/>
                </div>
                
            </div>
            <div> 
                {index < array.length-1 && <input onClick={() => changeOrder(array[index].id, array[index+1].id , false)} type="button" value='-'/> }
                {index > 0 && <input onClick={() => changeOrder(array[index-1].id, array[index].id, true)} type="button" value='+'/> }
             </div>
            <div className={style.addedDate}>{date.toDateString()}</div>
        </div>);
    });

    return (<> 
    {listsArray}
    </>);
}
export default List;