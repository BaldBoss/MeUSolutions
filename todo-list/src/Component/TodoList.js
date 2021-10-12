import React from "react";

const TodoList = ({taskList,setCompleteTask,removeTask,removeAllTask}) =>{
    if(taskList === []) return <p>No Task Available</p>
    console.log(taskList)
    return(
        <div>
            {taskList.map((task,index) =>(
                <div className={taskList[index].isCompleted ? "todo_task completed" : 'todo_task'} key={index}>
                    <div className="task-container">
                        <button className='checkbox' onClick={(e)=> setCompleteTask(e,task.id)}></button>
                        <span className={taskList[index].isCompleted ? "crossed" : ''}>{task.value}</span>
                    </div>
                    {removeTask ? (
                        <button className="remove" onClick={(e) => removeTask(e,task.id)}>
                            <span className="material-icons">&#xE872;</span>
                        </button>
                    ):null}
                </div>
            ))}

            {removeTask && (taskList.length > 0) ? (
                <button className="removeAll" onClick={removeAllTask}>
                        <span className="material-icons">&#xE872;</span>
                        <span>Remove All Task</span>                    
                </button>
            ):null}
        </div>
    )
}

export default TodoList