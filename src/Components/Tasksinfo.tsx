import styles from './Tasksinfo.module.css';

interface tasks{
    id: string,
    name: string,
    isCompleted: boolean;
}

interface data{
    lengthOfAllTasks: number,
    tasks: tasks[]; 
}

export function Tasksinfo({lengthOfAllTasks, tasks}:data){

    let tasksCompleted = tasks.filter( task => {
        return task.isCompleted === true
      }).length

    return (
    <div className={styles.info}>

        <div className={styles.taskscreated}>
            <span>Tarefas criadas</span>
            <p>{lengthOfAllTasks}</p>
        </div>

        <div className={styles.completed}>
            <span>Concluídas</span>
            <p>{lengthOfAllTasks ? `${tasksCompleted} de ${lengthOfAllTasks}` : '0'}</p>
        </div>
    
    </div>
  )
}