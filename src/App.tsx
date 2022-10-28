import { ChangeEvent, FormEvent, useState } from 'react';
import { Tasksinfo } from './Components/Tasksinfo';
import { NoTasks } from './Components/NoTasks';
import { Task } from './Components/Task';
import { v4 as uuidv4 } from 'uuid';

import './global.css';
import styles from './App.module.css';
import { PlusCircle } from 'phosphor-react';
import Logo from './assets/Logo.svg';

export function App() {

  const [message,setNewMessage] = useState('');
  const [tasks,setNewTask] = useState([
    {
      id: uuidv4(),
      name: 'Estudar mais react',
      isCompleted: true,
    },
    {
      id: uuidv4(),
      name: 'Estudar Java',
      isCompleted: false,
      },
  ])

  function handleGetTask(event: ChangeEvent<HTMLInputElement>){
    setNewMessage(event.target.value);
  }

  function handleAddNewTask(event: FormEvent){
    event.preventDefault();
    const newTask = {
      id: uuidv4(),
      name: message,
      isCompleted: false,
    }

    setNewTask([...tasks, newTask])
  }

  function handleDeleteTask(id:string){

    const newTasks = tasks.filter(task => {
       return task.id !== id;
    })

    setNewTask(newTasks);
  }

  function handleCompleteTask(id: string){

    const newTasks = tasks.map( task => {
      if(task.id == id) {
        return {...task, isCompleted: !task.isCompleted}
      }
      
      return task
    })

    setNewTask(newTasks);
  }

  return (
    <div className={styles.app}>
      <header>
        <img src={Logo} />
      </header>
      <form onSubmit={handleAddNewTask}>
        <input type="text" value= {message} onChange={handleGetTask} placeholder="Adicione uma nova tarefa" required/>
        <button type="submit" >
          Criar
          <span><PlusCircle size={19} /></span>
        </button>
      </form>
      <div className={styles.container}>

          <Tasksinfo lengthOfAllTasks={tasks.length} tasks={tasks}/>
        {
          !tasks.length ?
          <NoTasks /> : 
          <div className={styles.tasks}>
            {tasks.map(task => {
              return (
              <Task 
                key = {task.id}
                id = {task.id}
                name = {task.name}
                isCompleted = {task.isCompleted}
                handleDeleteTask = {handleDeleteTask}
                handleCompleteTask = {handleCompleteTask}
              />
              )
            })}
          </div>
        }
      </div>
      
    </div>
  )
}
