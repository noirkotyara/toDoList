import React, { useEffect, useState } from 'react';
import List from './List';
import style from './Lists.module.scss';

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
                <div className={style.buttons}>
                    <div className={style.container}>
                        <div className={`${style.btn} ${style.effect01}`}>
                            <span onClick={addTitle} >Create</span>
                        </div>
                    </div>
                </div>
                {/* <input className={style.createTitleBut} onClick={addTitle} value="Create" /> */}

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