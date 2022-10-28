import styles from './Task.module.css';
import { Trash } from 'phosphor-react';

interface Tasks{
    id: string,
    name: string,
    isCompleted: boolean;
    handleDeleteTask: (id: string) => void;
    handleCompleteTask: (id: string) => void;
}

export function Task({id, name, isCompleted, handleDeleteTask, handleCompleteTask}:Tasks){

    function deleteTask(){
        handleDeleteTask(id);
    }

    function completeTask(){
        handleCompleteTask(id);
    }

    return (
                <div className={styles.task}>
                    {
                        isCompleted ?
                        ( 
                            <div className={styles.checkboxCompleted}>
                                <input type="checkbox" checked/>
                                <span onClick={completeTask}></span>
                            </div>
                        ) :
                        (   <div className={styles.checkbox}>
                                <input onClick={completeTask} type="checkbox" checked/>
                                <span onClick={completeTask}></span>
                            </div>
                        )
                    }
                    <p>{name}</p>
                    <button onClick={deleteTask}><Trash size={24} /></button>
                </div>
    )

}