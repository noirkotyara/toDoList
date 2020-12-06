import style from './Tasks.module.css';
import React, { useEffect, useState } from 'react';

const Description = React.memo( props => {

    let [editMode, changeEditMode] = useState(false);
    let [choosedTaskId, changeChoosedTaskId ] = useState('');
    let [newDesc, changeNewDesc] = useState(props.task.description);
    
    let turnEditMode = () => {
        
        changeEditMode(!editMode);
        changeChoosedTaskId(props.taskId);
    }

    let onChangeDesc = (newText) => {
        changeNewDesc(newText);
    }
    let updateDesc = (task) => {
       
        changeEditMode(!editMode);
        props.updateTask(props.id, props.taskId, {...props.task, description: newDesc})
        debugger
    }
    
    return(
        <div>
            {(editMode && choosedTaskId === props.taskId)
            ? <textarea type='text' onBlur={() => updateDesc()} onChange={(e) => onChangeDesc(e.currentTarget.value)} autoFocus={true} value={newDesc}></textarea>
            :<span onDoubleClick={turnEditMode}>{props.task.description}</span>
            }
            

        </div>
    )
});
export default Description;