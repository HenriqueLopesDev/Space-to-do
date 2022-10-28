import styles from './NoTasks.module.css';
import Clipboard from '../assets/Clipboard.svg';

export function NoTasks(){

    return(

        <div className={styles.tasklist}>
          <div className={styles.content}>
            <img src={Clipboard} />
            <div className={styles.messages}>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        </div>
    )
}