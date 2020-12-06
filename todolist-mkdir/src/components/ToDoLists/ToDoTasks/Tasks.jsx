import style from './Tasks.module.css';
import React, { useState } from 'react';
import Task from './Task';

const Tasks = React.memo(props => {

    let [viewMode, changeViewMode] = useState(false);
    
    
    let viewTasks = (id) => {
        changeViewMode(!viewMode);
        props.getTasks(id);
        
    }

    // let changeInViewMode = () => {
    //     changeViewMode(!viewMode);
    // }
 
    return (
        <div>
            <span  className={style.viewTasks} onClick={() => viewTasks(props.id)}>View tasks</span>
            {viewMode && <div>
                <Task {...props}  />
            </div>}
            
        </div>
    );
});
export default Tasks;