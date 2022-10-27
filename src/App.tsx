import styles from './App.module.css';
import './global.css';
import Logo from './assets/Logo.svg';

export function App() {

  return (
    <div className={styles.app}>
      <header>
        <img src={Logo} />
      </header>
      <form>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button type="submit">Criar</button>
      </form>
      <div className={styles.container}>

        <div className={styles.info}>

          <div className={styles.taskscreated}>
            <span>Tarefas criadas</span>
            <p>0</p>
          </div>

          <div className={styles.completed}>
            <span>Concluídas</span>
            <p>0</p>
          </div>
          
        </div>
      </div>
      
    </div>
  )
}
