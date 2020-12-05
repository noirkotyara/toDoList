import style from './Lists.module.css';
import React, { useEffect, useState } from 'react';


const List = (props) => {

    let [editMode, changeEditMode] = useState(false);
    let [choosedTitle, changeTitle] = useState(1);
    let [newTitleText, changeNewTitleText] = useState('');

    let deleteList = (todolistId) => {
        props.deleteList(todolistId);
    }
    let updateTitle = () => {
        //thunk
        props.renameTitle(choosedTitle, newTitleText);
        changeEditMode(false);
        changeNewTitleText('');
    }
    let activateEditMode = (text, id) => {
        changeTitle(id);
        changeNewTitleText(text);
        changeEditMode(true);
        
    }
    
    let listsArray = props.lists.map(list => {
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
                    Tasks
                </div>
            </div>
            <div className={style.addedDate}>{date.toDateString()}</div>
        </div>);
    });

    return (<> 
    {listsArray}
    </>);
}
export default List;