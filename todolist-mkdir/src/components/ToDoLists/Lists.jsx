import React, { useEffect, useState } from 'react';
import style from './Lists.module.css';
import List from './List';
import Preloader from '../Common/Preloader';

const Lists = React.memo(props => {
    let [newTitle, changeNewTitle] = useState('');
    
    
    useEffect(() => {
        props.getLists();
    }, []);

    let onTitleChangeText = (text) => {
        changeNewTitle(text);
    }

    let addTitle = () => {
        props.postList(newTitle);
        changeNewTitle('');
    }

    return <div>
        
        <div className={style.newTitle}>
            <span className={style.textTitle}>
                Create new List
            </span>
            
            <div>
                <textarea  className={style.createTitleTextArea} value={newTitle} onChange={(e) => onTitleChangeText(e.currentTarget.value)} cols="25" rows='1'/>
                <input className={style.createTitleBut} onClick={addTitle} type="button" value="Create" />
            </div>

        </div>

        <div className={style.content}>
            <List 
            {...props}
            />
        </div>

    </div>
});

export default Lists;