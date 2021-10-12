import React, { useEffect, useState } from 'react';
import '../css/todo.css'
import TodoList from './TodoList';

const Todo = () =>{
    const [task,setTask] = useState('');
    const [taskList,setTaskList] = useState([]);
    const [completedTasks,setCompletedTasks] = useState([]);
    const [activeTasks,setActiveTasks] = useState([]);
    const [navType,setNavType] = useState('all');

    //them local storage
    const LOCAL_STORAGE_KEY = 'tasklist'
    const addLocalStorage = (value) =>{
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(value))
    }
    const getLocalStorage = () =>{
        if(localStorage.getItem('tasklist')){
            const getLocalStorageTask = JSON.parse(localStorage.getItem('tasklist'));
            setTaskList(getLocalStorageTask);
        }
    }
    const handleInput = ({target}) =>{
        if(target.value.length > 0){
            setTask(target.value);
            console.log(task)
        }
    }
    const addtask = (e) =>{
        e.preventDefault();
        if(task === ''){
            alert('Task is empty!!!! ')
        }else{
            const Task = {
                id: Math.floor(Math.random() * 100),
                value: task,
                isCompleted: false,
            }
            //spread tasklist de add new task vao
            const newTasks = [...taskList, Task];
            setTaskList(newTasks);
            addLocalStorage(newTasks)
            //set task ve rong sau khi add voo tasklist
            setTask('')
        }
    }
    const removeAllTask = () =>{
        const tasks = [];
        setTaskList(tasks);
        addLocalStorage(tasks);
    }
    const removeTask = (e,id) =>{
        e.preventDefault();
        const newTaskList = taskList.filter((item) => item.id !==id);
        setTaskList(newTaskList);
        addLocalStorage(newTaskList);
    }
    const setCompleteTask = (e,id) =>{
        e.preventDefault();
        const element = taskList.findIndex((index) => index.id === id);

        const spreadTaskList = [...taskList];
        console.log(spreadTaskList[element])

        if(spreadTaskList[element].isCompleted === false){
            spreadTaskList[element]={
                ...spreadTaskList[element],
                isCompleted: true,
            }
        }else{
            spreadTaskList[element]={
                ...spreadTaskList[element],
                isCompleted: false,
            }
        }
        setTaskList(spreadTaskList);
        addLocalStorage(spreadTaskList);
    }

    useEffect(()=>{
            const getCompletedTasks = () =>{
                setCompletedTasks(taskList.filter((item)=> item.isCompleted===true))
            }
            const getActiveTaks = () =>{
                setActiveTasks(taskList.filter((item)=> item.isCompleted===false))
            }
        getCompletedTasks();
        getActiveTaks();

    },[taskList])
    useEffect(()=>{
        getLocalStorage()
    },[])
    return(
        <div className="container">
            <h1 className="title"> #todo</h1>
            <div className="nav_wrapper">
                <nav className="nav_todo">
                    <ul>
                        <li className={navType === 'all' ? 'actived' : null} onClick={()=> setNavType('all')}>All</li>
                        <li className={navType === 'active' ? 'actived' : null} onClick={()=> setNavType('active')}>Active</li>
                        <li className={navType === 'completed' ? 'actived' : null} onClick={()=> setNavType('completed')}>Completed</li>
                    </ul>
                </nav>

                <div className="content-container">
                    {navType === 'completed' ? null : (
                        <form className='add-form' onSubmit={addtask}>
                            <input type='text' name='new-task' id='new-task' value={task} placeholder="add details" onChange={handleInput}></input>
                            <button type='submit'>Add</button>
                        </form>
                    )}
                    <div className="todo-list">
                        {navType=== 'all' ? (
                            <TodoList taskList={taskList} setCompleteTask={setCompleteTask}></TodoList>
                        ):null}
                        {navType=== 'active' ? (
                            <TodoList taskList={activeTasks} setCompleteTask={setCompleteTask}></TodoList>
                        ):null}
                        {navType=== 'completed' ? (
                            <TodoList taskList={completedTasks} setCompleteTask={setCompleteTask} removeTask={removeTask} removeAllTask={removeAllTask}></TodoList>
                        ):null}                                                 
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Todo