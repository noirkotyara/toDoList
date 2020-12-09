import style from './Tasks.module.scss';
import React, { useState } from 'react';
import Task from './Task';
import arrowDown from './../../../assets/arrowDown.png';
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
            <span  className={style.viewTasks} onClick={() => viewTasks(props.id)}> <img src={arrowDown} alt='arrowDown'></img> </span>
            {viewMode && <div>
                <Task {...props}  />
            </div>}
            
        </div>
    );
});
export default Tasks;